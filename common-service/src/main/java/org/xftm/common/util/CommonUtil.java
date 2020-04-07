package org.xftm.common.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CommonUtil {
    private static final Logger log = LoggerFactory.getLogger(Thread.currentThread().getStackTrace()[1].getClassName());

    public static void main(String[] a) {
        String id = "{}fd;afjdjfioe{}";
        log.info(id, "1", "2");
    }

    /**
     * null字符串
     */
    public static final String NULL_STRING = "null";

    /**
     * 判断是否为空字符串或者为空。
     *
     * @param param：需要判断的字符串。
     * @return false：非空返回  true:空字符串或者'null'时返回。
     */
    public static boolean isNullString(String param) {
        if (null == param) {
            return true;
        } else if (0 == replaceAllBlank(param).length()) {
            return true;
        } else if (NULL_STRING.equals(replaceAllBlank(param)) || NULL_STRING.toUpperCase().equals(replaceAllBlank(param))) {
            return true;
        } else {
            return "".equals(replaceAllBlank(param));
        }
    }

    public static boolean isNullString(Object param) {
        return isNullString(param + "");
    }


    public static final ObjectMapper DEFAULT_OBJECT_MAPPER = new ObjectMapper();

    /**
     * 验证身份证号码
     *
     * @param str
     * @return
     */
    public static boolean isIdNo(String str) {
        if (isNullString(str)) {
            return false;
        }
        str = replaceAllBlank(str);
        // 定义判别用户身份证号的正则表达式（15位或者18位，最后一位可以为字母）
        String regularExpression = "(^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$)|(^[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{2}$)";
        //假设18位身份证号码:41000119910101123X  410001 19910101 123X
        //^开头
        //[1-9] 第一位1-9中的一个      4
        //\\d{5} 五位数字           10001（前六位省市县地区）
        //(18|19|20)                19（现阶段可能取值范围18xx-20xx年）
        //\\d{2}                    91（年份）
        //((0[1-9])|(10|11|12))     01（月份）
        //(([0-2][1-9])|10|20|30|31)01（日期）
        //\\d{3} 三位数字            123（第十七位奇数代表男，偶数代表女）
        //[0-9Xx] 0123456789Xx其中的一个 X（第十八位为校验值）
        //$结尾

        //假设15位身份证号码:410001910101123  410001 910101 123
        //^开头
        //[1-9] 第一位1-9中的一个      4
        //\\d{5} 五位数字           10001（前六位省市县地区）
        //\\d{2}                    91（年份）
        //((0[1-9])|(10|11|12))     01（月份）
        //(([0-2][1-9])|10|20|30|31)01（日期）
        //\\d{3} 三位数字            123（第十五位奇数代表男，偶数代表女），15位身份证不含X
        //$结尾
        boolean matches = str.matches(regularExpression);

        //判断第18位校验值
        if (matches) {

            if (str.length() == 18) {
                try {
                    char[] charArray = str.toCharArray();
                    //前十七位加权因子
                    int[] idCardWi = {7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2};
                    //这是除以11后，可能产生的11位余数对应的验证码
                    String[] idCardY = {"1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"};
                    int sum = 0;
                    for (int i = 0; i < idCardWi.length; i++) {
                        int current = Integer.parseInt(String.valueOf(charArray[i]));
                        int count = current * idCardWi[i];
                        sum += count;
                    }
                    char idCardLast = charArray[17];
                    int idCardMod = sum % 11;
                    if (idCardY[idCardMod].toUpperCase().equals(String.valueOf(idCardLast).toUpperCase())) {
                        return true;
                    } else {
                        log.info(str + "身份证最后一位:" + String.valueOf(idCardLast).toUpperCase() +
                                "错误,正确的应该是:" + idCardY[idCardMod].toUpperCase());
                        return false;
                    }

                } catch (Exception e) {
                    log.error("验证身份证号码异常:", e);
                    return false;
                }
            }

        }
        return matches;
    }


    /**
     * 字符串去除所有空格，制表符回车符
     *
     * @param str
     * @return
     */
    public static String replaceAllBlank(String str) {
        String dest = "";
        if (str != null) {
            Pattern p = Pattern.compile("\\s*|\t|\r|\n");
            Matcher m = p.matcher(str);
            dest = m.replaceAll("");
        }
        return dest;
    }

    /**
     * 根据身份证号获取性别
     * @param idCard
     * @return 1-男 2-女
     */
    public static String getSex(String idCard){
        String sex = "";
        if (!isNullString(idCard)){
            //15位身份证号
            if (idCard.length() == 15){
                if (Integer.parseInt(idCard.substring(14, 15)) % 2 == 0) {
                    sex = "2";
                } else {
                    sex = "1";
                }
                //18位身份证号
            } else if(idCard.length() == 18){
                // 判断性别
                if (Integer.parseInt(idCard.substring(16).substring(0, 1)) % 2 == 0) {
                    sex = "2";
                } else {
                    sex = "1";
                }
            }
        }
        return sex;
    }


    /**
     * 两个对象所有属性是否相等
     *
     * @param pojo1
     * @param pojo2
     * @return
     */
    public static boolean isAllFieldsEquals(Object pojo1, Object pojo2) {
        if (!pojo1.getClass().equals(pojo2.getClass())) {
            return false;
        }
        boolean result = true;
        List<String> textList = new ArrayList<>();
        Class clazz = pojo1.getClass();
        Field[] fields = pojo1.getClass().getDeclaredFields();
        for (Field field : fields) {
            Object o1 = null;
            Object o2 = null;
            try {
                PropertyDescriptor pd = new PropertyDescriptor(field.getName(), clazz);
                Method getMethod = pd.getReadMethod();
                o1 = getMethod.invoke(pojo1);
                o2 = getMethod.invoke(pojo2);
            } catch (IntrospectionException e) {
                log.debug(e.getMessage(), e);
            } catch (IllegalAccessException e) {
                log.error(e.getMessage(), e);
            } catch (InvocationTargetException e) {
                log.error(e.getMessage(), e);
            }
            Optional obj1 = Optional.ofNullable(o1);
            Optional obj2 = Optional.ofNullable(o2);
            if (obj1.isPresent() && obj2.isPresent()) {
                if (obj1.get() instanceof Comparable && obj2.get() instanceof Comparable) {
                    if (((Comparable) obj1.get()).compareTo(obj2.get()) != 0) {
                        textList.add(pojo1.getClass().toString() + " 不一样的属性：" + field.getName() + " 属性值：[" + o1.toString() + "," + o2.toString() + "]");
                        result = false;
                    }
                } else {
                    if (!obj1.get().equals(obj2.get())) {
                        textList.add(pojo1.getClass().toString() + " 不一样的属性：" + field.getName() + " 属性值：[" + o1.toString() + "," + o2.toString() + "]");
                        result = false;
                    }
                }
            } else if (!obj1.isPresent() && !obj2.isPresent()) { //两者都是null

            } else {
                Object str1 = obj1.orElse("null");
                Object str2 = obj2.orElse("null");
                textList.add(pojo1.getClass().toString() + " 不一样的属性：" + field.getName() + " 属性值：[" + str1.toString() + "," + str2.toString() + "]");
                result = false;
            }
        }

        for (String str : textList) {
            log.info(str);
        }
        return result;
    }

    /**
     * 身份证15位转18位
     * @param inputStr
     * @return
     */
    public static String trans15bitTo18bit(String inputStr) {
        String[] input = inputStr.split("");
        String[] result = new String[18];
        for (int i = 0; i < input.length; i++) {
            if (i <= 5) {
                result[i] = input[i];
            } else {
                result[i + 2] = input[i];
            }
        }
        //年份最后两位小于17,年份为20XX，否则为19XX
        if (Integer.valueOf(input[6]) <= 1 && Integer.valueOf(input[7]) <= 7) {
            result[6] = "2";
            result[7] = "0";
        } else {
            result[6] = "1";
            result[7] = "9";
        }
        //计算最后一位
        String[] xs = {"7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"};
        //前十七位乘以系数[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],
        int sum = 0;
        for (int i = 0; i < 17; i++) {
            sum += Integer.valueOf(result[i]) * Integer.valueOf(xs[i]);
        }
        //对11求余，的余数 0 - 10
        int rod = sum % 11;
        //所得余数映射到对应数字即可
        if (rod == 0) {
            result[17] = "1";
        } else if (rod == 1) {
            result[17] = "0";
        } else if (rod == 2) {
            result[17] = "X";
        } else if (rod == 3) {
            result[17] = "9";
        } else if (rod == 4) {
            result[17] = "8";
        } else if (rod == 5) {
            result[17] = "7";
        } else if (rod == 6) {
            result[17] = "6";
        } else if (rod == 7) {
            result[17] = "5";
        } else if (rod == 8) {
            result[17] = "4";
        } else if (rod == 9) {
            result[17] = "3";
        } else if (rod == 10) {
            result[17] = "2";
        }
        String resutStr = "";
        for (int i = 0; i < result.length; i++) {
            resutStr = resutStr + result[i];
        }
        return resutStr;
    }
}


//package org.xftm.utils;
//
//
//
///**
// * @author : Aaron
// *
// * create at:  2020-04-14  09:57
// *
// * description: StringUtil
// */
//public class StringUtil {
//  private static final Logger log = LoggerFactory.getLogger(StringUtil.class);
//
//
//
//  /**
//   * 获取字符串拼音的第一个字母
//   *
//   * @param chinese
//   * @return
//   */
//  public static String toFirstChar(String chinese, HanyuPinyinCaseType type) {
//    String pinyinStr = "";
//    char[] newChar = chinese.toCharArray();  //转为单个字符
//    HanyuPinyinOutputFormat defaultFormat = new HanyuPinyinOutputFormat();
//    defaultFormat.setCaseType(type);
//    defaultFormat.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
//    for (int i = 0; i < newChar.length; i++) {
//      if (newChar[i] > 128) {
//        try {
//          pinyinStr += PinyinHelper.toHanyuPinyinStringArray(newChar[i], defaultFormat)[0].charAt(0);
//        } catch (Throwable e) {
//          log.error(newChar[i] + "转换汉语拼音异常", e);
//          pinyinStr += "";
//        }
//      } else {
//        pinyinStr += newChar[i];
//      }
//    }
//    return pinyinStr;
//  }
//
//  /**
//   * 汉字转为拼音
//   *
//   * @param chinese
//   * @return
//   */
//  public static String toPinyin(String chinese, HanyuPinyinCaseType type) {
//    String pinyinStr = "";
//    char[] newChar = chinese.toCharArray();
//    HanyuPinyinOutputFormat defaultFormat = new HanyuPinyinOutputFormat();
//    defaultFormat.setCaseType(type);
//    defaultFormat.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
//    for (int i = 0; i < newChar.length; i++) {
//      if (newChar[i] > 128) {
//        try {
//          pinyinStr += PinyinHelper.toHanyuPinyinStringArray(newChar[i], defaultFormat)[0];
//        } catch (Throwable e) {
//          log.error(newChar[i] + "转换汉语拼音异常", e);
//          pinyinStr += "";
//        }
//      } else {
//        pinyinStr += newChar[i];
//      }
//    }
//    return pinyinStr;
//  }
//
//  /**
//   * 判断是否为空字符串或者为空。
//   *
//   * @param param：需要判断的字符串。
//   * @return false：非空返回  true:空字符串或者null时返回。
//   */
//  public static boolean isNull(String param) {
//    if (null == param) {
//      return true;
//    } else if (0 == param.trim().length()) {
//      return true;
//    } else if ("null".equals(param.trim())) {
//      return true;
//    } else return "".equals(param.trim());
//  }
//
////
////
////  public static String getJSONArrayToSqlin(JSONArray array) {
////    String result = "";
////    if (array != null && array.size() > 0) {
////      result += "(";
////      for (int i = 0; i < array.size(); i++) {
////        if (i == array.size() - 1) {
////          result += array.get(i) + "";
////        } else {
////          result += array.get(i) + ",";
////        }
////      }
////      result += ")";
////    }
////    return result;
////  }
//
////  public static String getArrayStr(Object[] array, String split) {
////    String result = "";
////    if (array != null) {
////      for (int i = 0; i < array.length; i++) {
////        if (i == array.length - 1) {
////          result += array[i];
////        } else {
////          result += array[i] + split;
////        }
////      }
////    }
////    return result;
////  }
//
////  public static String getArrayStr(byte[] array, String split) {
////    String result = "";
////    if (array != null) {
////      for (int i = 0; i < array.length; i++) {
////        if (i == array.length - 1) {
////          result += array[i];
////        } else {
////          result += array[i] + split;
////        }
////      }
////    }
////    return result;
////  }
//
//  //为null的转换成""
//  public static String changeNullToString(String var) {
//    return var == null ? "" : var;
//  }
//
//  /**
//   * 64进制
//   */
//  final static char[] digits = {'0', '1', '2', '3', '4', '5', '6', '7', '8',
//      'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
//      '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
//      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
//      'Z', '+', '/',};
//
//
//  /**
//   * 把10进制的数字转换成64进制
//   *
//   * @param number
//   * @return
//   */
//  public static String number_10_to_64(long number) {
//    char[] buf = new char[64];
//    int charPos = 64;
//    int radix = 1 << 6;
//    long mask = radix - 1;
//    do {
//      buf[--charPos] = digits[(int) (number & mask)];
//      number >>>= 6;
//    } while (number != 0);
//    return new String(buf, charPos, (64 - charPos));
//  }
//
//  /**
//   * 把64进制的字符串转换成10进制
//   *
//   * @param decompStr
//   * @return
//   */
//  public static long number_64_to_10(String decompStr) {
//    long result = 0;
//    for (int i = decompStr.length() - 1; i >= 0; i--) {
//      for (int j = 0; j < digits.length; j++) {
//        if (decompStr.charAt(i) == digits[j]) {
//          result += ((long) j) << 6 * (decompStr.length() - 1 - i);
//        }
//      }
//    }
//    return result;
//  }
//
//
//
//  /**
//   * 判断参数是否为null null的情况下返回""
//   *
//   * @param o
//   * @return
//   */
//  public static String changeParam(Object o) {
//
//    if (o == null) {
//
//      return "";
//    } else {
//
//      return o.toString();
//    }
//
//  }
//
//  /**
//   * 判断参数是否为null null的情况下返回""
//   *
//   * @param o
//   * @return
//   */
//  public static int changeParamInt(Object o) {
//
//    if (o == null) {
//
//      return 0;
//    } else {
//
//      return Integer.valueOf(o.toString());
//    }
//
//  }
//}
//

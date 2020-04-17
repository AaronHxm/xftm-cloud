package org.xftm.sys.ctrl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.xftm.bean.ResultInfo;
import org.xftm.sys.service.UserService;
import org.xftm.sys.vo.UserVo;


/**
 * @author : Aaron
 *
 * create at:  2020-04-15  09:45
 *
 * description: 用户控制类
 */
@RequestMapping("/userCtrl")
@RestController
public class UserCtrl {




  private static final Logger log = LoggerFactory.getLogger(UserCtrl.class);

  @Autowired
  private UserService userService;

  @RequestMapping("/loginByUserNameAndPwd")
  public ResultInfo<UserVo> loginByUserNameAndPwd(String name,String userPwd){

    log.error("传入的用户名：{},用户密码:{}",name,userPwd);

    return userService.loginByUserNameAndPwd(name,userPwd);
  }


  public static int Sum_Solution1(int n){
    int res = n;
    boolean flag = (n>0)&&((res+=Sum_Solution2(n-1))>0);
    return res;
  }

  //库函数
  public static int Sum_Solution2(int n){

    int sum = (int)(Math.pow(n, 2)+n);
    int a = sum>>1;
    System.out.println(a);
    return a;
  }

  public static void main(String[] args) {
    UserCtrl userCtrl = new UserCtrl();
    System.out.println(UserCtrl.Sum_Solution1(10));
  }
}




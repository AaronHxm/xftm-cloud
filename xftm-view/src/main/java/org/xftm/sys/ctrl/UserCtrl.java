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




}




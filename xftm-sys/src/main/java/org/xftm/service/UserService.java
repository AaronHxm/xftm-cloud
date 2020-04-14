package org.xftm.service;

import org.springframework.stereotype.Service;
import org.xftm.bean.ResultInfo;
import org.xftm.po.UserPo;
import org.xftm.vo.UserVo;

/**
 * @author : Aaron
 *
 * create at:  2020-04-14  09:46
 *
 * description: 用户相关接口类
 */
@Service
public interface UserService {

  /**
   *根据用户名和密码 验证是否登陆
   * @param userName 用户名
   * @param pwd 用户密码
   * @return
   */
  ResultInfo<UserVo> loginByUserNameAndPwd(String userName,String pwd);


  /**
   * 根据用户名查询用户对象
   * @param userName
   * @return
   */
  UserPo getUserPoByUserName(String userName);

}

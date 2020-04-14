package org.xftm.service.impl;

import java.util.Queue;
import org.springframework.stereotype.Service;
import org.xftm.bean.ResultInfo;
import org.xftm.enums.StatusCodeEnum;
import org.xftm.po.UserPo;
import org.xftm.service.UserService;
import org.xftm.vo.UserVo;

/**
 * @author : Aaron
 *
 * create at:  2020-04-14  09:46
 *
 * description: 用户实现类
 */
@Service
public class UserServiceImpl implements UserService {

  /**
   * 根据用户名和密码 验证是否登陆
   *
   * @param userName 用户名
   * @param pwd 用户密码
   */
  @Override
  public ResultInfo<UserVo> loginByUserNameAndPwd(String userName, String pwd) {

    UserPo userPo = getUserPoByUserName(userName);
    if(userPo ==null){

        ResultInfo<UserVo> resultInfo =  new ResultInfo<UserVo>(StatusCodeEnum.NOT_FOUND);
        return resultInfo;
    }
    ResultInfo<UserVo> resultInfo =  new ResultInfo<UserVo>(StatusCodeEnum.OK);
    //此处省略 vo对象的赋值 原因位 vo对象可能存在多个对象的拼接 暂时省略
    resultInfo.setData(new UserVo());
    return resultInfo;
  }

  /**
   * 根据用户名查询用户对象
   */
  @Override
  public UserPo getUserPoByUserName(String userName) {
    boolean userNameNull = userName == null || "".equals(userName);
    if(userNameNull){

      return null;
    }

    //此处db 暂时省略

    UserPo userPo = new UserPo();

    if(userPo == null){


      return null;
    }

    UserPo usero1 = new UserPo();

    return usero1;
  }
}


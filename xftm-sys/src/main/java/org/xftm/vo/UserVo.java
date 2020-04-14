package org.xftm.vo;

/**
 * @author : Aaron
 *
 * create at:  2020-04-14  09:32
 *
 * description: 用户返回视图
 */
public class UserVo {

  /**
   * 用户ID
   */
  private Integer userId;
  /**
   * 用户名
   */
  private String userName;

  /**
   * 用户真实姓名
   */
  private String realUserName;

  /**
   * 电话号码
   */
  private String telPhone;

  /**
   * 手机号
   */
  private String mobilePhone;

  /**
   * token
   */
  private String token;


  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer userId) {
    this.userId = userId;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getRealUserName() {
    return realUserName;
  }

  public void setRealUserName(String realUserName) {
    this.realUserName = realUserName;
  }

  public String getTelPhone() {
    return telPhone;
  }

  public void setTelPhone(String telPhone) {
    this.telPhone = telPhone;
  }

  public String getMobilePhone() {
    return mobilePhone;
  }

  public void setMobilePhone(String mobilePhone) {
    this.mobilePhone = mobilePhone;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  @Override
  public String toString() {
    return "UserVo{" +
        "userId=" + userId +
        ", userName='" + userName + '\'' +
        ", realUserName='" + realUserName + '\'' +
        ", telPhone='" + telPhone + '\'' +
        ", mobilePhone='" + mobilePhone + '\'' +
        ", token='" + token + '\'' +
        '}';
  }
}


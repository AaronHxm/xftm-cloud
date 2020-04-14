package org.xftm.bean;

import org.xftm.enums.StatusCodeEnum;

/**
 * @author : Aaron
 *
 * create at:  2020-04-14  09:02
 *
 * description: ResultInfo
 */
public class ResultInfo<T> {

  private int code;

  private String message;

  private T data;

  private Long count;

  public int getCode() {
    return code;
  }

  public void setCode(int code) {
    this.code = code;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public T getData() {
    return data;
  }

  public void setData(T data) {
    this.data = data;
  }

  public Long getCount() {
    return count;
  }

  public void setCount(Long count) {
    this.count = count;
  }




  public ResultInfo(StatusCodeEnum statusCodeEnum) {
    this.code = statusCodeEnum.getCode();
    this.setMessage(statusCodeEnum.getValue());
  }
  public ResultInfo(StatusCodeEnum statusCodeEnum,String msg) {
    this.code = statusCodeEnum.getCode();
    this.setMessage(msg);
  }


  public ResultInfo(int code, String message, T data, Long count) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.count = count;
  }

  public ResultInfo() {
  }
  public static <R> ResultInfo<R> buildSuccess(R r){
    ResultInfo<R> resultInfo = new ResultInfo<>(StatusCodeEnum.OK);
    resultInfo.setData(r);
    return resultInfo;
  }
  public static  ResultInfo<String> buildFailed(String r){
    ResultInfo<String> resultInfo = new ResultInfo<>(StatusCodeEnum.BAD_REQUEST);
    resultInfo.setMessage(r);
    return resultInfo;
  }
}

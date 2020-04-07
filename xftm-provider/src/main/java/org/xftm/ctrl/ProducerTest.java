package org.xftm.ctrl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author : Aaron
 *
 * create at:  2020-04-02  14:16
 *
 * description: test
 */
@RestController
public class ProducerTest {


  @Value("${server.port}")
  private Integer port;

  /**
   * 服务接口
   * @param name
   * @return
   */
  @RequestMapping("/hello/{name}")
  public String sayHello(@PathVariable("name")String name) {
    return "hello ---> "+name+" port -->"+port;
  }


}


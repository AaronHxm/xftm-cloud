package org.xftm.common.client.controller;

import org.apache.dubbo.config.annotation.Reference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.xftm.common.client.rpc.CallDubboService;


@RestController
public class TestController {
    @Autowired
    private CallDubboService callDubboService;

    @GetMapping("/testDubbo/{name}")
    public String hello(@PathVariable("name") String name) {
        String result = callDubboService.sayHello(name);
        return result;
    }
}

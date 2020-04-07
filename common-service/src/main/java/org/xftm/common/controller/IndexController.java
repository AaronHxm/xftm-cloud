package org.xftm.common.controller;

import com.alibaba.csp.sentinel.Entry;
import com.alibaba.csp.sentinel.EntryType;
import com.alibaba.csp.sentinel.SphU;
import com.alibaba.csp.sentinel.slots.block.BlockException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.xftm.common.mq.produce.SenderService;
import org.xftm.common.service.TestService;

@RestController
public class IndexController {
    private static final Logger log = LoggerFactory.getLogger(Thread.currentThread().getStackTrace()[1].getClassName());

    @Autowired
    private TestService service;
    @Autowired
    private SenderService senderService;

    @GetMapping("/testProducer")
    public String testProducer() throws Exception {
        log.info("testProducer");
        senderService.send("testProducer");
        return "done";
    }

    @GetMapping(value = "/hello/{name}")
    public String apiHello(@PathVariable String name) {
        return service.sayHello(name);
    }

    @GetMapping("/testSentinel")
    @ResponseBody
    public String testSentinel() {
        String resourceName = "testSentinel";
        Entry entry = null;
        String retVal;
        try {
            entry = SphU.entry(resourceName, EntryType.IN);
            retVal = "passed";
        } catch (BlockException e) {
            retVal = "blocked";
        } finally {
            if (entry != null) {
                entry.exit();
            }
        }
        return retVal;
    }
}

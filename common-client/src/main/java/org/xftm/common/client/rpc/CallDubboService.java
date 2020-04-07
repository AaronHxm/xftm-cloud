package org.xftm.common.client.rpc;

import org.apache.dubbo.config.annotation.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.xftm.api.BaseService;

@Service
public class CallDubboService {
    private static final Logger log = LoggerFactory.getLogger(Thread.currentThread().getStackTrace()[1].getClassName());

    @Reference
    BaseService baseService;

    public String sayHello(String name) {
        log.info("callDubbo---->" + name);
        return baseService.sayHello(name);
    }

}

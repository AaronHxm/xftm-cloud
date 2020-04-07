package org.xftm.common.service.rpc;


import org.apache.dubbo.config.annotation.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xftm.api.BaseService;

@Service
public class BaseServiceImpl implements BaseService {
    private static final Logger log = LoggerFactory.getLogger(Thread.currentThread().getStackTrace()[1].getClassName());


    @Override
    public String sayHello(String name) {
        log.info("receive--->"+name);
        return "hellow, " + name;
    }
}

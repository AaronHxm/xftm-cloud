package org.xftm.common;

import org.apache.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.xftm.common.mq.consume.CommonSink;
import org.xftm.common.mq.produce.CommonSource;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
@EnableBinding({ CommonSource.class, CommonSink.class })
@EnableDubbo
public class CommonApplication {

    public static void main(String[] args) {
        SpringApplication.run(CommonApplication.class, args);
    }

}

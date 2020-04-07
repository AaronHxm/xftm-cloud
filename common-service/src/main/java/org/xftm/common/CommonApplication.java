package org.xftm.common;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.xftm.common.mq.consume.CommonSink;
import org.xftm.common.mq.produce.CommonSource;

@SpringBootApplication
@EnableBinding({ CommonSource.class, CommonSink.class })
public class CommonApplication {

    public static void main(String[] args) {
        SpringApplication.run(CommonApplication.class, args);
    }

}

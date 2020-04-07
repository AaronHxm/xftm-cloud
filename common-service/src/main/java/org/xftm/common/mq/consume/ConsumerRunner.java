package org.xftm.common.mq.consume;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.ParameterizedTypeReference;

public class ConsumerRunner implements CommandLineRunner {
    private static final Logger log = LoggerFactory.getLogger(Thread.currentThread().getStackTrace()[1].getClassName());

    @Autowired
    private CommonSink commonSink;

    @Override
    public void run(String... args) throws InterruptedException {

        while (true) {
            commonSink.input1().subscribe(message -> {
                ObjectMapper mapper = new ObjectMapper();
                try {
                    log.info(mapper.writeValueAsString(message));
                } catch (JsonProcessingException e) {
                    log.error("", e);
                }
            });
            commonSink.input5().poll(m -> {
                String payload = (String) m.getPayload();
                log.info("pull msg: " + payload);
            }, new ParameterizedTypeReference<String>() {
            });
            Thread.sleep(2_000);
        }

    }
}

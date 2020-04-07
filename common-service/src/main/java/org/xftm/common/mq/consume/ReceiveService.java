package org.xftm.common.mq.consume;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

@Service
public class ReceiveService {
    private static final Logger log = LoggerFactory.getLogger(Thread.currentThread().getStackTrace()[1].getClassName());


    @StreamListener("input1")
    public void receiveInput1(String receiveMsg) {
        log.info("input1 receive: " + receiveMsg);
    }

    @StreamListener("input2")
    public void receiveInput2(String receiveMsg) {
        log.info("input2 receive: " + receiveMsg);
    }

    @StreamListener("input3")
    public void receiveInput3(@Payload Object foo) {
        log.info("input3 receive: " + foo);
    }

    @StreamListener("input4")
    public void receiveTransactionalMsg(String transactionMsg) {
        log.info("input4 receive transaction msg: " + transactionMsg);
    }
}

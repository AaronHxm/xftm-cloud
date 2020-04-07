package org.xftm.common.mq.produce;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface CommonSource {

    @Output("output1")
    MessageChannel output1();

    @Output("output2")
    MessageChannel output2();

    @Output("output3")
    MessageChannel output3();

}
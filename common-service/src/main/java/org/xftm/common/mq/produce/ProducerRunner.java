package org.xftm.common.mq.produce;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.messaging.support.MessageBuilder;

public class ProducerRunner implements CommandLineRunner {
    private final String bindingName;

    public ProducerRunner(String bindingName) {
        this.bindingName = bindingName;
    }

    @Autowired
    private SenderService senderService;

    @Autowired
    private CommonSource commonSource;

    @Override
    public void run(String... args) throws Exception {
        if (this.bindingName.equals("output1")) {
            int count = 5;
            for (int index = 1; index <= count; index++) {
                String msgContent = "msg-" + index;
                if (index % 3 == 0) {
                    senderService.send(msgContent);
                }
                else if (index % 3 == 1) {
                    senderService.sendWithTags(msgContent, "tagStr");
                }
                else {
                    senderService.sendObject(new String("foo"), "tagObj");
                }
            }
        }
        else if (this.bindingName.equals("output3")) {
            int count = 20;
            for (int index = 1; index <= count; index++) {
                String msgContent = "pullMsg-" + index;
                commonSource.output3()
                        .send(MessageBuilder.withPayload(msgContent).build());
            }
        }

    }
}

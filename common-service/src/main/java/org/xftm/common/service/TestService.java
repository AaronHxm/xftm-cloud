package org.xftm.common.service;

import com.alibaba.csp.sentinel.EntryType;
import com.alibaba.csp.sentinel.annotation.SentinelResource;
import com.alibaba.csp.sentinel.slots.block.BlockException;
import org.apache.rocketmq.client.consumer.DefaultMQPushConsumer;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyContext;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.client.producer.SendResult;
import org.apache.rocketmq.common.consumer.ConsumeFromWhere;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.common.message.MessageExt;
import org.apache.rocketmq.remoting.common.RemotingHelper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    @SentinelResource(value = "sayHello", entryType = EntryType.IN,
            blockHandler = "exceptionHandler", defaultFallback = "fallback")
    public String sayHello(String name) {
//        String a = null;
//        a.substring(1);
        return "你好, " + name;
    }

    public String fallback(Throwable e) {
        e.printStackTrace();
        return "你被降级啦";
    }

    /**
     * fallback: fallback 函数名称，可选项，仅针对降级功能生效（DegradeException）。fallback 函数的访问范围需要是
     *     public，参数类型和返回类型都需要与原方法相匹配，并且需要和原方法在同一个类中。
     *     若 blockHandler 和 fallback 都进行了配置，则遇到降级的时候首先选择 fallback 函数进行处理。
     *     注意 blockHandler 是处理被 block 的情况（所有类型的 BlockException），而 fallback 仅处理被降级的情况（DegradeException
     *     ）。其它异常会原样抛出，Sentinel 不会进行处理。
     */
    public String helloFallback(String s) {
        return "你被降级啦" + s;
    }

    /**
     * blockHandler / blockHandlerClass: blockHandler 对应处理 BlockException 的函数名称，可选项。
     * blockHandler 函数访问范围需要是 public，返回类型需要与原方法相匹配，参数类型需要和原方法相匹配并且最后加一个额外的参数，
     * 类型为 BlockException。
     * blockHandler 函数默认需要和原方法在同一个类中。
     * 若希望使用其他类的函数，则可以指定 blockHandlerClass 为对应的类的 Class 对象，注意对应的函数必需为 static 函数，否则无法解析。
     */
    public String exceptionHandler(String s, BlockException ex) {
        // Do some log here.
        ex.printStackTrace();
        return "你被限流啦" + s;
    }

    /**
     * defaultFallback（since 1.6.0）：默认的 fallback 函数名称，可选项，通常用于通用的 fallback 逻辑（即可以用于很多服务或方法）。
     * 默认 fallback 函数可以针对所有类型的异常（除了 exceptionsToIgnore 里面排除掉的异常类型）进行处理。
     * 若同时配置了 fallback 和 defaultFallback，则只有 fallback 会生效。
     * defaultFallback 函数签名要求：
     * 返回值类型必须与原函数返回值类型一致；
     * 方法参数列表需要为空，或者可以额外多一个 Throwable 类型的参数用于接收对应的异常。
     *
     * defaultFallback 函数默认需要和原方法在同一个类中。若希望使用其他类的函数，
     * 则可以指定 fallbackClass 为对应的类的 Class 对象，注意对应的函数必需为 static 函数，否则无法解析。
     *
     * exceptionsToIgnore（since 1.6.0）：用于指定哪些异常被排除掉，不会计入异常统计中，也不会进入 fallback 逻辑中，而是会原样抛出。
     *
     *
     * 特别地，若 blockHandler 和 fallback 都进行了配置，则被限流降级而抛出 BlockException 时只会进入 blockHandler 处理逻辑。
     * 若未配置 blockHandler、fallback 和 defaultFallback，则被限流降级时会将 BlockException 直接抛出
     * （若方法本身未定义 throws BlockException 则会被 JVM 包装一层 UndeclaredThrowableException）。
     */


    public static void main(String[] args) throws Exception {
        String rmqAddr = "10.10.80.21:9876";
        String groupName = "testgroup";
        // 构造Producer
        DefaultMQProducer producer = new DefaultMQProducer(groupName);
        producer.setNamesrvAddr(rmqAddr);
        // 初始化Producer，整个应用生命周期内，只需要初始化1次
        producer.start();
        for (int i = 0; i < 100; i++) {
            Message msg = new Message("TopicTest", "TagA",
                    ("Hello RocketMQ" + i).getBytes(RemotingHelper.DEFAULT_CHARSET));
            SendResult sendResult = producer.send(msg);
            System.out.println(sendResult);
        }
        producer.shutdown();

        //Consumer
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer(groupName);
        consumer.setNamesrvAddr(rmqAddr);
        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
        consumer.subscribe("TopicTest", "*");
        consumer.registerMessageListener(new MessageListenerConcurrently() {
            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs,
                                                            ConsumeConcurrentlyContext context) {
                System.out.printf(Thread.currentThread().getName() + "Receive New Messages :" + msgs + "%n");
                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
            }
        });
        consumer.start();
    }
}

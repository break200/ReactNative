//
//  SomeModule.m
//  ReactNative
//
//  Created by mograine on 2021/11/07.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SomeModule, NSObject)
   RCT_EXTERN_METHOD(someMethod:(NSString *)someParameter)
   RCT_EXTERN_METHOD(getAllTasks:(NSDictionary*)params callback:(RCTResponseSenderBlock)callback)
@end
//메소드 인터페이스를 작성할때, 첫번째 파라미터에 메소드명을 명시해주어야한다. 이게 파라미터가 없는 상황과 1개인 상황, 그리고 다수개인 상황에서 작성이 조금 헷갈리는데, 대충 아래처럼 사용하면 된다.
//
//RCT_EXTERN_METHOD(someMethod)
//RCT_EXTERN_METHOD(someMethod:(NSString *)param)
//RCT_EXTERN_METHOD(someMethod:(NSString *)param1 param2:(NSString *)param2)
//RCT_EXTERN_METHOD(someMethod:(NSString *)param1 param2:(NSString *)param2 param3:(NSString *)param3)

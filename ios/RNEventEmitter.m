//
//  ReactNativeEventEmitter.m
//  ReactNative
//
//  Created by mograine on 2021/11/28.
//


#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNEventEmitter, NSObject)
     RCT_EXTERN_METHOD(someMethod:(NSString *)someParameter)
@end

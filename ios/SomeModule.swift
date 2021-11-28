//
//  SomeModule.swift
//  ReactNative
//
//  Created by mograine on 2021/11/07.
//

import Foundation
@objc(SomeModule)
class SomeModule: NSObject {
  @objc func someMethod(_ someParameter: String) {
    // TODO What you want to do
      print(someParameter)
  }

  @objc(getAllTasks:callback:)
  func getAllTasks(params:[String:Any] , callback:RCTResponseSenderBlock){
      let tasks = ["key":"fcmToken","date":"current_date_string","completion":"false"]
      
      callback([NSNull(),tasks])
  }
}

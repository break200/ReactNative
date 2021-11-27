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
    let tasks = [["key":"fcmToken","Date":"current_date_string"]]
    callback([NSNull(),tasks])
  }

  @objc(getAllTasksString:callback:)
  @objc func getAllTasksString(params:String , callback:RCTResponseSenderBlock){
    let tasks = [["key":"fcmToken","Date":"current_date_string"]]
    callback([NSNull(),tasks])
  }
}

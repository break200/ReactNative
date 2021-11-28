//
//  ReactNativeEventEmitter.swift
//  ReactNative
//
//  Created by mograine on 2021/11/28.
//

import Foundation

@objc(RNEventEmitter)
class RNEventEmitter: RCTEventEmitter {
    
    var mTimer:Timer?
    var intcount = 0
    //提供出EventName
    override func supportedEvents() -> [String]! {
        return ["UnReadMsgCountEvent"]
    }

    override func startObserving() {
        NotificationCenter.default.addObserver(self, selector: #selector(emitEventInternal(_:)), name: NSNotification.Name(rawValue: "event-emitted"), object: nil)
    }
    
    override func stopObserving() {
        NotificationCenter.default.removeObserver(self)
    }
    
    @objc func emitEventInternal(_ notification: NSNotification)  {
        let eventName: String = notification.userInfo?["eventName"] as! String
        print("send event to RN: \(self.bridge) \(eventName) \(notification.userInfo)")
        self.sendEvent(withName: eventName, body: notification.userInfo)
    }

    @objc func notifiyRN(_ eventName: String, parameters: [String: Any] = [:] ) {
        var newParams: [String: Any] = parameters
        newParams["eventName"] = eventName
        NotificationCenter.default.post(name: NSNotification.Name(rawValue: "event-emitted"), object: self, userInfo: newParams)
    }
  
  
  @objc func someMethod(_ someParameter: String) {
    intcount = 0
    DispatchQueue.main.async {
      self.mTimer = Timer.scheduledTimer(timeInterval: 1.0, target: self, selector: #selector(self.fire), userInfo: nil, repeats: true)
    }
  }
  
  @objc func fire(){
    RNEventEmitter().notifiyRN("UnReadMsgCountEvent",parameters: ["unReadMsgCount": intcount]);
    if intcount == 10 {
       mTimer?.invalidate()
    }
    intcount += 1
  }
}

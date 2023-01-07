import browser, { Runtime } from 'webextension-polyfill'
import MessageSender = Runtime.MessageSender;
// import { getBrowser } from "../utils";
// import { onMessage, sendMessage } from 'webext-bridge';

type BackgroundMessageType = {
   action: string;
   type: string;
   data: any;
}

// Set callback for plugin installed event
browser.runtime.onInstalled.addListener(async (result: { reason: string; }) => {
   if (result.reason === 'install') {
      console.log('[restart]')
   }
});

// Set callback for page unloading event
browser.runtime.onSuspend.addListener(() => {
   // TODO
})

// Listening plugin icon click events
browser.action.onClicked.addListener( ({ id }) => {
   if (id) {
      // https://github.com/zikaari/webext-bridge#destination
   }
});

// Get user oauth token
// browser.identity.getAuthToken({ interactive: true }, function (token) {
//    console.log('[token]', token)
// });

// Get user email and id
// browser.identity.getProfileUserInfo({ accountStatus: 'ANY' } as any, async (userInfo: UserInfo) => {
//    console.log('[userInfo]', userInfo)
// })

// Listening keyboard shortcuts events
browser.commands.onCommand.addListener((command: any) => {
   console.log('[command]', command)
});

// Initialize listener plugin events
const listener = () => {
   browser.runtime.onMessage.addListener((msg: BackgroundMessageType, sender: MessageSender) => {
      // const { action, type, data } = msg;
      console.log('[msg]', msg);
      console.log('[sender]', sender);
   });
}

listener();

import {
    Injectable,
    Optional
} from '@angular/core';
import {
    Subject,
    Subscription
} from 'rxjs';
import * as Rx from 'rxjs/Rx';
import {
    Observable
} from 'rxjs/Observable';
import {
    Observer
} from 'rxjs/Observer';
import {
    MemoryStorage
} from '../assets/lib/memory-storage';

const api = require('../assets/api/api.json');
console.log(api);
const WS_DOMAIN = api[0].socketurl;
console.log(WS_DOMAIN);

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    WS_URL = {
        user_login: "Admin/Login", //用户登录
        resume_login: "Admin/ResumeLogin", //恢复登录
        staff_list: "Staff/StaffList", //员工列表和搜索列表
        staff_add: "Staff/StaffAdd", //新增员工
        staff_addupdata: "Staff/StaffAddUpdate", //处理添加提交的员工信息
        staff_edit: "Staff/StaffEdit", //修改员工信息返回员工基本信息
        staff_updata: "Staff/StaffUpdate", //接收修改的员工的信息
        staff_delete: "Staff/StaffDelete", //删除员工
        role_add: "Roles/RolesAdd", //添加角色
        role_list: "Roles/RolesList", //角色列表
        role_edit: "Roles/RolesEdit", //角色编辑
        role_permission: "Roles/RolesPermissionUpdate", //编辑角色权限
        role_update: "Roles/RolesUpdate", //添加角色提交的信息
        role_delete: "Roles/RolesDelete", //删除角色
        third_payment: "PayType/PayTypeList", //第三方支付列表
        log_list: "Logs/LogsList", //日志列表
        log_export: "Logs/LogsExport", //日志导出
        commission_list: "Website/GameCommission/CommissionList", //游戏比例设置
        modefy_password: "Admin/ModifyPassWord", //修改登录密码
        login_out: "Admin/LoginOut", //退出登录
        offical_list: "LotteryTicket/Official/OfficialList", //官方彩票列表
        save_officalist: "LotteryTicket/Official/OfficialSave", //保存官方彩票列表设置
        selfopen_list: "LotteryTicket/Self/SelfOpenList", //自开彩票列表
        save_openlist: "LotteryTicket/Self/SelfOpenSave", //保存自开彩票列表设置
        ticket_play: "LotteryTicket/Play/TicketPlay", //彩票玩法开关的列表
        ticket_save: "LotteryTicket/Play/TicketPlaySave", //修改彩票玩法开关保存信息
        playsrate_setting: "LotteryTicket/Setting/PlayRateSetting", //彩票设置--玩法赔率设置信息
        playsrate_edit: "LotteryTicket/Setting/PlayRateSettingEdit", //彩票设置--编辑玩法赔率设置信息
        playsrate_save: "LotteryTicket/Setting/PlayRateSettingSave", //彩票设置--保存玩法赔率设置信息
        rebate_setting: "LotteryTicket/Setting/RRebateSetting", //彩票设置 --返水设置
        rebate_settingsave: "LotteryTicket/Setting/RebateSettingSave", //彩票设置--返水设置
        rebate_settingedit: "LotteryTicket/Setting/RebateSettingEdit", //彩票设置--编辑返水设置信息
        bet_setting: "LotteryTicket/Setting/BetSetting", //彩票设置--投注额设置
        bet_edit: "LotteryTicket/Setting/BetSettingEdit", //彩票设置 --投注额编辑
        bet_settingsave: "LotteryTicket/Setting/BetSettingSave", //彩票设置--保存投注额设置
        result_list: "LotteryTicket/Result/ResultList", //开奖结果列表及搜索
        site_report: "Report/SiteReport", //站点彩票报表
        site_analyze: "Report/SiteAnalyze", //站点分析
        site_bill: "Report/SiteBill", //月结对账报表
        sitelottery_list: "Website/SiteLottery/SiteLotteryList", //站点彩票设置--彩票开关列表
        sitelottery_save: "Website/SiteLottery/SiteLotterySave", //站点彩票设置--彩票开关保存设置
        siteplay_list: "Website/SiteLottery/SitePlayList", //站点彩票设置--彩票玩法列表
        siteplay_save: "Website/SiteLottery/SitePlaySave", //站点彩票设置--保存彩票具体玩法的开关设置
        sitegame_list: "Website/SiteLottery/SiteGameSave", //站点彩票设置--保存彩票彩种的玩法的开关设置
        app_setting: "Website/App/AppSetting", //APP管理--列表类
        app_edit: "Website/App/AppEdit", //APP管理--保存列表
        service_list: "Website/Rent/RentList", //服务费设置
        service_save: "Website/Rent/RentSave", //服务费保存


    }
    public status;
    public key_resume;
    public line;

    public ws: WebSocket;
    public callback_list: {
        url: string,
        callback: Function
    }[] = []; //函数表

    constructor() {
        this.init();
        this.key_resume = window.localStorage.getItem('key')
        this.line = window.localStorage.getItem('online')
        this.status = window.localStorage.getItem('line')
    }


    /**
     * websocket初始化
     */
    public init() {
        if (this.ws) {
            return;
        }
        this.ws = new WebSocket(WS_DOMAIN);
        this.ws.onopen = () => {
            console.log("websocket 连接..."); 
        }
        this.ws.onmessage = (evt) => {
            console.log('websocket 接收到了一条新数据...');
            let a = evt.data.indexOf("{");
            if (a == -1) {
                console.log(`当前服务器时间为:${evt.data}`)
                return;
            }
            let data = evt.data.slice(a);
            if (this.callback_list.length != 0) {
                let index = -1;
                this.callback_list.forEach((i, dex) => {
                    let isOk = evt.data.indexOf(i.url);
                    if (isOk != -1) {
                        index = dex;
                        i.callback(JSON.parse(data));
                        return;
                    }
                });
                if (index >= 0) {
                    this.callback_list.splice(index, 1);
                }
            }
        };
        this.ws.onclose = (evt) => {
            console.log('websocket 连接关闭...');
        }
        this.ws.onerror = (err) => {
            console.log('websocket 出现问题....')
            console.log(err);
        }
    }
    /**
     * 关闭ws
     * @returns 是否关闭成功
     */
    public ws_close(): boolean {
        if (this.ws) {
            if (this.ws.readyState == WebSocket.OPEN) {
                this.ws.close();
                return true;
            }
        }
        return false;
    }
    /**
     * 打开ws
     * @returns 是否开启成功
     */
    public ws_open(): boolean {
        if (this.ws) {
            if (this.ws.readyState == WebSocket.CLOSED) {
                this.ws = null;
                this.init();
                return true;

            }
        }
        return false;
    }
    /**
     * 发送请求
     * @param url 接口url
     * @param data 传递数据
     * @param callback 回调函数
     * @returns 是否发送成功
     */
    public ws_send(url: string, data: any, callback: Function): boolean {

        if (this.ws.readyState == WebSocket.OPEN) {
            console.log("coming this funtion" + this.ws.readyState)
            this.ws.send(`${url} ${data}`);
            this.callback_list.push({
                "url": url,
                "callback": callback
            });
            // this.callback = callback;
            return true;
        }
        this.ws_open();
        setTimeout(() => {
            this.ws_send(url, data, callback);
        }, 1000);

    }

    public send_url(url: string, data: any, callback: Function) {
        this.ws.send(`${url} ${data}`);
        this.callback_list.push({
            "url": url,
            "callback": callback
        });
    }
}
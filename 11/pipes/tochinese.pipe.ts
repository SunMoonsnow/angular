import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tochinese'
})
export class TochinesePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
    	case "account_admin_delete": return "删除员工";
      case "account_admin_insert": return "新增员工";
      case "account_admin_select": return "查看员工";
      case "account_admin_update": return "修改员工";

      case "account_operate_select": return "查看日志";

      case "account_role_delete": return "删除角色";
      case "account_role_select": return "查看角色";
      case "account_role_update": return "修改角色";
      case "account_role_insert": return "添加角色";

      case "cash_list": return "三方支付方式列表";
      case "report_analysis": return "站点分析";
      case "report_monthly": return "月结对账报表";
      case "report_site": return "站点彩票报表";

      case "ticket_official_select": return "查看官方彩";
      case "ticket_official_update": return "修改官方彩";
      case "ticket_play_select": return "查看玩法开关";
      case "ticket_play_update": return "修改玩法开关";
      case "ticket_result_select": return "查看开奖结果";
      case "ticket_self_select": return "查看自开彩";
      case "ticket_self_update": return "修改自开彩";

      case "ticket_setting_bet": return "修改投注额设置";
      case "ticket_setting_bonus": return "修改玩法赔率设置";
      case "ticket_setting_select": return "查看彩票设置";
      case "ticket_setting_rebate": return "修改返点设置";

      case "website_app_select": return "查看APP管理";
      case "website_app_update": return "修改APP管理";
      case "website_interface_select": return "查看外接口管理";
      case "website_interface_update": return "修改外接口管理";
      case "website_lottery_select": return "查看站点彩票设置";
      case "website_lottery_update": return "修改站点彩票设置";
      case "website_tax_select": return "查看提成和服务费设置";
      case "website_tax_update": return "修改提成和服务费设置";
    }
  }

}
@Pipe({
  name: 'stringPi'
})
export class StringPiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    args = args||30;
    return value && value.length>30?value.substr(0,args)+'.....':value;
  }

}

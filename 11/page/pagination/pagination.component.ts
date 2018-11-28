import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pageParams;
  @Output() changeCurPage:EventEmitter<Number> = new EventEmitter;
  public pageNo = 1;
  constructor() { 
  }

    ngOnInit() {
  }

  nextPage(){
    if(this.pageParams.currentPage != this.pageParams.totalpage){
      this.pageNo +=1;
    }else{
      this.pageNo = this.pageParams.totalpage;
    }
    this.changeCurPage.emit(this.pageNo);
  }

  prePage(){
    if(this.pageParams.currentPage != 1){
      this.pageNo -=1;
    }else{
      this.pageNo = 1;
    }
    this.changeCurPage.emit(this.pageNo);
  }

  public gotoPage($event){
    console.log($event);
    var keycode = $event.code;
    if(keycode == "Enter"){   
      if(this.pageNo > 0 && this.pageNo <= this.pageParams.totalpage){
      	this.pageParams.goPage = parseInt($event.path[0].value);
      	this.pageNo = parseInt($event.path[0].value);
      	this.pageParams.currentPage = this.pageNo;//当前页   
      	this.changeCurPage.emit(this.pageParams.currentPage);
      }else{
      
      	console.log('请输入准确的页码数');
      }
      
    }
    if(keycode == "Enter"){   
      if($event.path[0].value > 0 && $event.path[0].value <= this.pageParams.totalpage){
        this.pageParams.goPage = $event.path[0].value;
        this.pageNo = parseInt($event.path[0].value);
        this.pageParams.currentPage = this.pageNo;//当前页   
        this.changeCurPage.emit(this.pageParams.currentPage);
      }else{
      
        this.pageParams.currentPage = 1;
        this.pageNo = 1;

      }
      
    }
  }

  getPageList(){
    this.pageParams = eval("this.pageParams");

    let pageList = [];
    if(this.pageParams.totalpage <= this.pageParams.pageData){  //如果总数小于pageData，直接将代码放进去
      //如果总数大于pageData，不用进来
      for(let i = 0;i < this.pageParams.totalpage;i++){
        pageList.push({
          pageNo:i+1
        })
      }

    }else if(this.pageParams.totalpage - this.pageParams.currentPage < this.pageParams.totalpage && this.pageParams.currentPage > this.pageParams.totalpage - 1){
      //如果总的页码数减去当前页码数小于数差，那么直接计算出来显示
      for(let i = this.pageParams.currentPage;i>this.pageParams.totalpage - this.pageParams.currentPage;i--){
        pageList.push({
          pageNo:this.pageParams.totalpage - i + 1
        })

      }

    }else{
      //在中间的页码数
      // for(let i = 0;i < this.pageParams.totalpage;i++){
      //   pageList.push({
      //     pageNo:i+1
      //   })
      // }
      pageList.push({
        pageNo:this.pageParams.goPage
      })
    }
    return pageList;
  }


}
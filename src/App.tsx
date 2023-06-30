import { DashboardLayoutComponent, PanelDirective, PanelsDirective } from '@syncfusion/ej2-react-layouts';
import {ColumnDirective, ColumnsDirective, GridComponent} from '@syncfusion/ej2-react-grids';
import {AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, ChartComponent, DateTimeCategory,  SeriesCollectionDirective, SeriesDirective, SplineAreaSeries,Inject} from '@syncfusion/ej2-react-charts';
import './App.css';
function App() {
  let incomeExpenseData=[
    { period  : new Date('2017-01-01'), income:7490, expense:6973 },
    { period  : new Date('2021-02-01'), income:6840, expense :6060 },
    { period  : new Date('2021-03-01'), income:6060, expense:5500 },
    { period  : new Date('2012-04-01'), income:8190, expense :7059 },
    { period  : new Date('2021-05-01'), income:7320, expense :6333 },
    { period  : new Date('2021-06-01'), income :7380, expense :6135 }
  
  ];
  let PieRenderingData=[
    {x: "Mortgage / Rent", text:"15.76%", y:6000 },
    { x :"Food", text:"12.79%",y :4866 },
    { x: "Utilities", text:"10.93%", y :4160 },
    { x :"Bills", text:"10.4%", y: 3960 },
    { x :"Shopping", text:"8.87%", y:3375 },
    { x : "Transportation", text:"8.49%",y: 3230 },
    { x :"Insurance", text:"7.59%", y :2890 },
    { x: "Health Care", text:"6.52%", y:2480 },
    { x : "Clothing", text:"5.92%", y :2255 },
    {x :"Others", text:"12.73%", y :4844 }
  ];
  let  transactionData=[
    { category :"Food", amount :6, paymentMode : "Debit Card", iconCss :"food", isExpense :true, isIncome: false, transactoinId: "#131614678", description :"Palmetto Cheese, Mint julep" },
    { category:"Transportation", amount :7, paymentMode :"Debit Card", iconCss:"travel", isExpense : true, isIncome:false, transactoinId: "#131416876", description :"Other vehicle expenses" },
    { category :"Housing", amount :20, paymentMode : "Credit Card", iconCss : "housing", isExpense :true, isIncome :false, transactoinId: "#1711148579", description : "Laundry and cleaning supplies" },
    { category :"Extra Income", amount:110, paymentMode:"Cash", iconCss : "extra-income", isExpense:false, isIncome :true, transactoinId: "#1922419785", description : "Income from Sale" },
    { category :"Food", amount :10, paymentMode :"Credit Card", iconCss :"food", isExpense :true, isIncome :false, transactoinId: "#2744145880", description : "Muffuletta sandwich, Mint julep" }];


 function card1():JSX.Element{
    return(
      <table>
        <tr>
          <td>
            <p className="income-container">$43,300</p>
          </td>
          <td>
              <img src="../income.jpg" style={{marginLeft:"138px"}}  />
          </td>
        </tr>
      </table>
    );
  }
  function card2():JSX.Element{
    return(
      <table>
      <tr>
        <td>
          <p className="expense-container">$38,060</p>
        </td>
        <td>
            <img src="../expense.jpg" style={{marginLeft:"135px"}}  />
        </td>
      </tr>
    </table>
    );
  }
  function card3():JSX.Element{
    return(
      <table>
      <tr>
        <td>
          <p className="balance-container">$38,060</p>
        </td>
        <td>
          <img src="../balance.png" style={{marginLeft:"125px",marginBottom:"15px"}}  />
      </td>
      </tr>
    </table>
    );
  }
  function card4():JSX.Element{
    return(
      <table>
      <tr>
        <td>
          <p className="transaction-container">$38,060</p>
        </td>
        <td>
          <img src="../trans.jpg" style={{marginLeft:"118px",marginBottom:"15px"}} />
        </td>
      </tr>
    </table>
    );
  }
  function colChart():JSX.Element{
    return(
      <ChartComponent 
      primaryXAxis={{ valueType: 'DateTimeCategory', intervalType: 'Months', labelFormat:'MMM' }}
      primaryYAxis={{  minimum:1000,maximum: 9000, interval: 2000 }}>  
      <Inject services={[SplineAreaSeries, DateTimeCategory]} />
      <SeriesCollectionDirective>
      <SeriesDirective dataSource={incomeExpenseData} name='income' xName='period' yName='income' type='SplineArea' fill='#00BCD7' />
        <SeriesDirective dataSource={incomeExpenseData} name='expense' xName='period' yName='expense' type='SplineArea' fill='#CDDE1F' />
      </SeriesCollectionDirective>
        
      </ChartComponent>

    );
  }
  function pieChart():JSX.Element{
    return(
      <AccumulationChartComponent>
      <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={PieRenderingData} xName='text' yName='y' radius='83%' startAngle={0} endAngle={360} innerRadius='50%'
      dataLabel={{visible:true,name:'x',position: 'Outside'}}>
     
      </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>

    );
  }
  function categoryTemplate(props:any): any {
    var src = '../' + props.iconCss+'.png' ;
    var category=props.category;
    return (<div className='image'>
    <img className='category-icon' src={src}  />
    <div className='category-text'>{category}</div>
   
    </div>);
  }
  function amountTemplate(props:any): any {
   
    var amount=props.amount;
    return (<div className='image'>
    <span>$</span><span>{amount}</span>
   
    </div>);
    }
  function colGrid():JSX.Element{
    return(
      <GridComponent dataSource={transactionData}>
      <ColumnsDirective>
      <ColumnDirective field='transactoinId' headerText='Transaction ID' width={120} textAlign='Center'/>
      <ColumnDirective field='category' headerText='Category' width={120} template={categoryTemplate} >
  
        </ColumnDirective>
      <ColumnDirective field='paymentMode' headerText='PaymentMode' width={160} textAlign='Center'/>
      <ColumnDirective field='description' headerText='Description' width={160} textAlign='Center'/>
      <ColumnDirective field='amount' headerText='Amount' width={160} textAlign='Center'
      template={amountTemplate}>
        
        </ColumnDirective>
      </ColumnsDirective>
       
      </GridComponent>

    );
  }
  return (
    <div className="App">
      <DashboardLayoutComponent
        columns={8} cellSpacing={[10,10]} allowFloating={true} mediaQuery='max-width:700px'>
          <PanelsDirective>
            <PanelDirective header='<div>Income</div>'
            content={card1} cssClass='e-custom' 
            col={0} row={0} sizeX={2} sizeY={1}></PanelDirective>
            <PanelDirective header='<div>Expenses</div>'
            content={card2}
            col={2} row={0} sizeX={2} sizeY={1}></PanelDirective>
            <PanelDirective header='<div>Balance</div>'
            content={card3}
            col={4} row={0} sizeX={2} sizeY={1}></PanelDirective>
            <PanelDirective header='<div>Transactions</div>'
            content={card4}
            col={6} row={0} sizeX={2} sizeY={1}></PanelDirective>
             <PanelDirective header='<div>Income Expenses</div>'
            content={colChart}
            col={0} row={1} sizeX={4} sizeY={3}></PanelDirective>
             <PanelDirective header='<div>Total Expenses</div>'
            content={pieChart}
            col={4} row={1} sizeX={4} sizeY={3}></PanelDirective>
             <PanelDirective header='<div>Recent Transactions</div>'
            content={colGrid}
            col={0} row={4} sizeX={8} sizeY={3}></PanelDirective>
          </PanelsDirective>
      </DashboardLayoutComponent>
    </div>
  );

}
export default App;
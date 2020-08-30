import React,{useState,useEffect,useRef,useContext} from 'react'
import {Averageprice,Plans} from '../components/data'
import M from 'materialize-css'
import PriceModal from '../components/PriceModal'
import {UserContext} from '../App'

const PriceList = ()=>{
    const {dispatch} = useContext(UserContext)
    const popular = 1
    const priceModal = useRef(null)
    //selectedAveragePrice is having Average home value that should be slected when user open page for first time.
    // setAveragePrice is a function for updating selectedAveragePrice according to user.
    const [selectedAveragePrice,setAveragePrice] = useState(Averageprice[2])
    //Index is having the index of Average Home value present in selectedAveragePrice
    const [index,setIndex] = useState(2)
    //tabClass is having active or non-active class of each tab.
    const [tabClass,setTabClass] = useState([])
    //plan is containing all plans of a selcted Average home value.
    const [plan,setPlan] = useState(Plans[selectedAveragePrice])

    //This function triggers as soon as selectedAveragePrice is Changed
    useEffect(()=>{
        if(selectedAveragePrice){
            setPlan(Plans[selectedAveragePrice])
        }
    },[selectedAveragePrice])

    //This function triggers when the page is loaded and the components are mounted and this function also creates a tabClass Array
    // containing "non-active" value for each tab.
    useEffect(()=>{
        M.Modal.init(priceModal.current)
        const values = [...tabClass]
        for (let i=0;i<Averageprice.length;i++) {
            (i===index?values.push("active"):values.push("non-active"))
        }
        setTabClass(values)
    },[])
    
    // This function sets the plan selected by the user in the state.
    const setPlanModal = (value)=>{
        const payload = {plan_selected:value}
        dispatch({type:"UPDATE_PLAN",payload:payload})
    }
    //This function toggles the tab states from active to non-active or Vice Versa. As well as sets AveragePrice, index and tabClass.
    const handlePlanAndTabStates = (idx)=>{
        setAveragePrice(Averageprice[idx])
        const values = [...tabClass]
        values[index] = 'non-active'
        values[idx] = "active"
        setIndex(idx)
        setTabClass(values)
    }

    return(
    
      <div className="MainPrice-container">
          <div className = "InnerPrice-container">
              <div className = 'flex-container-tab'>
                  {Averageprice.map((item,idx) =>{
                      return(
                          //Component for creating Tabs.
                        <div key={idx} className={tabClass[idx]} onClick={()=>handlePlanAndTabStates(idx)}>{item}</div>
                      )
                  })}
              </div>
              <div className="row pricecard flex-container-price">
                  {
                  //Component for creating price cards.
                      plan.map((item,idx)=>{
                          return(
                              (idx==popular?
                                //component creating popuar price card.
                                <div className="col s3">
                                    <div className="popular">Most Popular!</div>
                                    <table>
                                        <thead>
                                        <tr>
                                <th> Qualified {item["qualified Leads per month"]}</th>
                                        </tr>
                                        </thead>
                                        <tbody className="popular-tbody"> 
                                <tr><td style={{fontSize:"30px",fontWeight:"500"}}>${item["price per live transfer"]}</td></tr>
                                        <tr><td> Per Qualified Lead</td></tr>
                                        <tr><td>Qualified Leads per month</td></tr>
                                        <tr><td>{item["qualified Leads per month"]}</td></tr>
                                        <tr><td>Platform Fee Per Month</td></tr>
                                        <tr><td>${item["platform price"]}</td></tr>
                                        </tbody>
                                        <tfoot>
                                <tr><td style={{fontSize:"16px",fontWeight:"500"}}> ${item["final package price"]}/mo</td></tr>
                                        </tfoot>
                                    </table>
                                    <div className="table-button modal-trigger cursor " data-target="modal" onClick={()=>setPlanModal(item["qualified Leads per month"])}>Start Your Trial</div>
                                </div>
                                :
                                //Component creating Normal Price card
                                <div className="col s3">
                                <table>
                                    <thead>
                                    <tr>
                            <th> Qualified {item["qualified Leads per month"]}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                            <tr><td style={{fontSize:"30px",fontWeight:"500"}}>${item["price per live transfer"]}</td></tr>
                                    <tr><td> Per Qualified Lead</td></tr>
                                    <tr><td>Qualified Leads per month</td></tr>
                                    <tr><td>{item["qualified Leads per month"]}</td></tr>
                                    <tr><td>Platform Fee Per Month</td></tr>
                                    <tr><td>${item["platform price"]}</td></tr>
                                    </tbody>
                                    <tfoot>
                            <tr><td style={{fontSize:"16px",fontWeight:"500"}}> ${item["final package price"]}/mo</td></tr>
                                    </tfoot>
                                </table>
                                <div className="table-button modal-trigger cursor " data-target="modal" onClick={()=>setPlanModal(item["qualified Leads per month"])}>Start Your Trial</div>
                            </div>
                            )
                            )
                      })
                  }
                  <div className="col s3">
                    {/* component creating enterprise card */}
                            <table>
                                <thead>
                                  <tr>
                          <th> Enterprise</th>
                                  </tr>
                                </thead>
                                <tbody >
                                    <div className="enterprise">
                                        Want more than 80 qualified leads each month?
                                    </div>
                                </tbody>
                            </table>
                            <div className="table-button-enterprise modal-trigger cursor " data-target="modal" onClick={()=>setPlanModal("80+")}>Get in Touch</div>
                        </div>
              </div>
          </div>
          {/* Modal component */}
            <div id="modal" className="modal" ref={priceModal}>
                <div className="modal-content">
                <PriceModal/>
                </div>
            </div>
      </div>
        
    )
}

export default PriceList
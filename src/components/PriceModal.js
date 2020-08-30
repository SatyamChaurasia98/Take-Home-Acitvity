import React, { useState, useContext } from 'react'
import { UserContext } from '../App'
const PriceModal = () => {
    const { state } = useContext(UserContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pno, setPno] = useState("")
    const [leadsCRM, setLeadsCRM] = useState("")
    const [noOfLeadsPerMonth, setNoOfLeadsPerMonth] = useState("")
    const [crmUse, setCrmUse] = useState("")
    const [noOfAgents, setNoofAgents] = useState("")
    // This will contain answers of "Biggest lead sorces checkBox"
    const [leadSourcesArray, setLeadSourcesArray] = useState([])
    const [isCheckLeadSources, setIsCheckLeadSources] = useState(["!checked", "!checked", "!checked", "!checked"])
    //This will contain anwers of "from where you listen about us checkBox"
    const [hearSourcesArray, setHearSourcesArray] = useState([])
    const [isCheckHearSources, setIsCheckHearSources] = useState(["!checked", "!checked", "!checked", "!checked", "!checked"])
    //Containing data of checkboxes.
    const checkBoxDataLeads = [{ id: 1, value: "Zillow" }, { id: 2, value: "Realtor" }, { id: 3, value: "Ylopo" }, { id: 4, value: "Others" }]
    const checkBoxDataHear = [{ id: 1, value: "Google" }, { id: 2, value: "FaceBook" }, { id: 3, value: "Email" }, { id: 4, value: "Friends" }, { id: 4, value: "Real Closers" }]
    
    // Function to show data on the alert Box.
    const submitData = () => {
        let message = ""
        message += "Name :" + " " + name
        message += "\n" + "Email :" + " " + email + "\n" + "Mobile Number :" + " " + pno + "\n" + "Number of leads you generate in a month :" + " " + noOfLeadsPerMonth + "\n"
        message += "Total leads in your CRM :" + " " + leadsCRM + "\n"
        message += "Which CRM do you use :" + " " + crmUse + "\n"
        message += "Number of agents :" + " " + noOfAgents + "\n"
        let leadsData =""
        for (const iter of leadSourcesArray) {
            leadsData+=iter+", "
        }
        message += "Which are your Biggest Leads: "+leadsData
        let sourcesData = ""
        for (const iter of hearSourcesArray) {
            sourcesData+=iter+", "
        }
        message+="\n"
        message += "From where you hear about us: "+sourcesData
        window.alert(message)
    }
    // function to handle check Box of "Biggest Lead sources"
    const handleCheckLeads = (index1, value) => {
        const index = index1
        console.log(index, value)
        const values = [...isCheckLeadSources]
        const data = [...leadSourcesArray]
        if (values[index] == "checked") {
            values[index] = "!checked"
            data.pop(value)
        }
        else {
            values[index] = "checked"
            data.push(value)
        }
        setIsCheckLeadSources(values)
        setLeadSourcesArray(data)
    }
    // Function to handle check Box of "From where you hear about us".
    const handleCheckSources = (index, value) => {
        const values = [...isCheckHearSources]
        const data = [...hearSourcesArray]
        if (values[index] == "checked") {
            values[index] = "!checked"
            data.pop(value)
        }
        else {
            values[index] = "checked"
            data.push(value)
        }
        setIsCheckHearSources(values)
        setHearSourcesArray(data)
    }

    return (
        <div><span style={{ float: "right" }}><i className="material-icons modal-close">close</i></span>
            <div className="outer-container-price-modal">
                <div className="form-title"><h5> Get started with SquadVoice</h5></div>
                {/* plan poplated from user selection */}
                <h6>Plan Selected: Qualified {state ? state.plan_selected : ""}</h6>
                <form>
                    <label>
                        Name
                    <input type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required />
                    </label>
                    <label className="set-input-left">
                        Email Address
                    <input type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required />
                    </label>
                    <label className="set-input-right">
                        Phone No.
                    <input type="tel"
                            value={pno}
                            onChange={(event) => setPno(event.target.value)}
                            required />
                    </label>
                    <label className="set-input-left">
                        Number of leads you generate in a month
                    <input type="number" min="0"
                            value={noOfLeadsPerMonth}
                            onChange={(event) => setNoOfLeadsPerMonth(event.target.value)}
                            required />
                    </label>
                    <label className="set-input-right">
                        Total leads in your CRM
                    <input type="number" min="0"
                            value={leadsCRM}
                            onChange={(event) => setLeadsCRM(event.target.value)}
                            required />
                    </label>
                    <label className="set-input-left">
                        Which CRM do you use
                    <input type="number" min="0"
                            value={crmUse}
                            onChange={(event) => setCrmUse(event.target.value)}
                            required />
                    </label>
                    <label className="set-input-right">
                        Number of agents
                    <input type="number" min="0"
                            value={noOfAgents}
                            onChange={(event) => setNoofAgents(event.target.value)}
                            required />
                    </label>
                    {/* checkBox component */}
                    <label>
                        Which are your biggest lead sources?
                    <div>
                            {checkBoxDataLeads.map(item => {
                                return (
                                    <label>
                                        <input type="checkbox"
                                            className="filled-in"
                                            value={item.value}
                                            onChange={(e) => handleCheckLeads(item.id, e.target.value)}
                                        />
                                        <span className="label">{item.value}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </label>
                    {/* checkbox component */}
                    <label>
                        How did you hear about us
                    <div>
                            {checkBoxDataHear.map(item => {
                                return (
                                    <label>
                                        <input type="checkbox"
                                            className="filled-in"
                                            value={item.value}
                                            onChange={(e) => handleCheckSources(item.id, e.target.value)}
                                        />
                                        <span className="label">{item.value}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </label>
                    <button className="btn waves-effect waves-light submit" onClick={() => submitData()}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PriceModal
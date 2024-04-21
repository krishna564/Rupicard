import '../styles/phone_number.css'
function PhoneNumber() {
    return(
        <div>
            <div className="input">
                <input type="text" placeholder="Enter Phone Number" />
                <div className='span'></div>
                <button>Apply Now</button>
            </div>
            <div className='concent-wrapper'>
                <input type='checkbox' checked id="concent" />
                <label htmlFor='concent'>
                    You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.
                </label>
            </div>
        </div>
    )
}

export default PhoneNumber;
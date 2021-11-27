import React from 'react'

const Contact = () => {
    const BannerImg = "https://www.freepik.com/blog/app/uploads/2018/02/raw-pasta-with-tomatoes-and-cheese-on-a-black-table-making-a-circle_1309-53.jpg"

    return (
        
        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${BannerImg})` }}>
            </div>
            <div className="rightSide">
                <h1> Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact

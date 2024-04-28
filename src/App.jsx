import React, { useState } from "react";
import star from '../public/icon-star.svg'
import openedIcon from '../public/icon-minus.svg'
import closedIcon from '../public/icon-plus.svg'
export default function App() {
  const [opened, setOpened] = useState({
    question1: true,
    question2: false,
    question3: false,
    question4: false,

  })
  return (
    <main>
      <div>
        <img src={star} />
        <h1>FAQS</h1>
      </div>
      <div>
        <div className="flex" onClick={() => setOpened({ ...opened, question1: !opened.question1 })}>
          <h3>What is Frontend Mentor, and how will it help me?</h3>
          <img src={opened.question1 ? openedIcon : closedIcon} alt="icon" />
        </div>
        {opened.question1 ? (
          <p>
            Frontend Mentor offers realistic coding challenges to help developers improve their
            frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
            all levels and ideal for portfolio building.
          </p>
        ) : (<></>)}
      </div>
      <div>
        <div className="flex" onClick={() => setOpened({ ...opened, question2: !opened.question2 })}>
          <h3>Is Frontend Mentor free?</h3>
          <img src={opened.question2 ? openedIcon : closedIcon} alt="icon" />
        </div>
        {opened.question2 ? (
          <p>
            Yes, Frontend Mentor offers both free and premium coding challenges, with the free
            option providing access to a range of projects suitable for all skill levels.

          </p>
        ) : (<></>)}
      </div>
      <div>
        <div className="flex" onClick={() => setOpened({ ...opened, question3: !opened.question3 })}>
          <h3>Can I use Frontend Mentor projects in my portfolio?</h3>
          <img src={opened.question3 ? openedIcon : closedIcon} alt="icon" />
        </div>
        {opened.question3 ? (
          <p>
            Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers!
          </p>
        ) : (<></>)}
      </div>
      <div>
        <div className="flex" onClick={() => setOpened({ ...opened, question4: !opened.question4 })}>
          <h3>How can I get help if I'm stuck on a Frontend Mentor challenge?</h3>
          <img src={opened.question4 ? openedIcon : closedIcon} alt="icon" />
        </div>
        {opened.question4 ? (
          <p>
            The best place to get help is inside Frontend Mentor's Discord community. There's a help
            channel where you can ask questions and seek support from other community members.

          </p>
        ) : (<></>)}
      </div>

    </main>
  )
}
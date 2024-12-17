import { useState } from "react";
import { affirmations } from "../components/Affirmations";

const HomePage: React.FC = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState<string>(
    affirmations[0]
  );

  const generateAffirmation = (): void => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  return (
    <div className="app">
      <section className="affirmation-section">
        {/* <h2>Daily Affirmation</h2> */}
        <p className="affirmation">"{currentAffirmation}"</p>
        <button onClick={generateAffirmation}>New Affirmation</button>
      </section>

      <section className="intro-section">
        <p>
          Being unemployed in the UK today is a daunting challenge, marked by
          the rising cost of living, increased competition in the job market,
          and the psychological toll of uncertainty. The current economic
          climate, with inflation affecting everyday expenses like food, rent,
          and energy bills, can make it feel like every day is an uphill battle.
          Those seeking employment may face frustration as industries adjust to
          shifts in demand, and it’s easy to feel overwhelmed by the seemingly
          endless applications and rejections.ate these challenges and find a
          brighter, more secure future ahead.
        </p>
        <p>
          But while the challenges are real, they are not insurmountable. It’s
          important to remember that unemployment is often a temporary phase in
          life, not a permanent label. The UK government and various
          organizations are offering resources to help job seekers, such as free
          training programs, career advice, and mental health support. Whether
          you’re pivoting to a new industry or returning to one you know,
          there’s a network of support designed to help you rebuild and refocus.
        </p>
        <p>
          This period can also be an opportunity to reassess your goals and
          discover your strengths. Taking time to upskill, perhaps through
          online courses or local workshops, can not only bolster your CV but
          also give you a sense of purpose and progress. Networking—both online
          and in-person—can open doors you didn’t even know existed, as people
          often find opportunities through connections rather than traditional
          job postings.
        </p>
        <p>
          Most importantly, hope comes from knowing you’re not alone. Many have
          faced similar struggles and emerged stronger, often in careers that
          they find more rewarding than they initially imagined. By staying
          persistent, seeking support, and focusing on growth, you can navigate
          these challenges and find a brighter, more secure future ahead.
        </p>
      </section>

      {/* <section className="tasks-section">
        <h2>Your Tasks</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                {task.description}
              </label>
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
};

export default HomePage;

import { useState, Fragment, useEffect, useRef } from "react";

const questions = [
  {
    id: 1,
    question: "Shipping",
    answer:
      "We ship globally, reaching every major country. Orders are dispatched from our U.S. headquarters and typically arrive within 5-10 business days. Expedited shipping options are available for urgent orders.",
  },
  {
    id: 2,
    question: "Return Policy",
    answer:
      "Your satisfaction is our priority. You can return any product within 30 days of purchase for a full refund or exchange. Items must be in their original condition. Custom tags may be subject to a restocking fee.",
  },
  {
    id: 3,
    question: "Exchange",
    answer:
      "We offer hassle-free exchanges for any defective or damaged products. If you need a different size or style, we're happy to exchange your purchase within 30 days, provided the items are in new and unused condition.",
  },
  {
    id: 4,
    question: "Tracking",
    answer:
      "Stay updated on your order’s journey! Once shipped, you'll receive a tracking number to monitor your package's progress. Access real-time updates online or contact our customer service for assistance.",
  },
];

const FAQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const openAnsSection = (id: number) => {
    if (currentQuestion === id) {
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(id);
    }
  };

  const filteredQuestions = questions.filter(
    (question) =>
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.question.toLowerCase() === searchTerm.toLowerCase() ||
      question.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.answer.toLowerCase() === searchTerm.toLowerCase()
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setCurrentQuestion(0);
      return;
    }

    const relevantQuestion = filteredQuestions.find(
      (question) =>
        question.question.toLowerCase().includes(term.toLowerCase()) ||
        question.question.toLowerCase() === term.toLowerCase() ||
        question.answer.toLowerCase().includes(term.toLowerCase())
    );

    setCurrentQuestion(relevantQuestion ? relevantQuestion.id : 0);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-9">
      <h2 className="text-center text-2xl font-semibold text-gray-800 lg:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-4 flex flex-col">
        <p className="text-center font-normal leading-6 text-gray-800">
          Here are a few of the most frequently asked questions by our valued
          customers
        </p>

        <div className="mt-10 flex w-full items-center justify-center border-b-2 border-gray-200 pb-2">
          <input
            placeholder="Search"
            type="text"
            aria-label="Search"
            className="w-full font-normal leading-4 text-gray-800 placeholder-gray-600 focus:outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        {filteredQuestions.map((question) => (
          <Fragment key={question.id}>
            <Question
              id={question.id}
              question={question.question}
              answer={question.answer}
              openAnsSection={openAnsSection}
              currentQuestion={currentQuestion}
            />
            <hr className="my-7 bg-gray-200" />
          </Fragment>
        ))}

        {filteredQuestions.length === 0 && (
          <div className="flex min-w-[300px] flex-col items-center justify-center">
            <p className="font-normal leading-6 text-gray-800">
              No results found for{" "}
              <span className="font-semibold">{`"${searchTerm}"`}</span>
            </p>
            <p className="mt-2 font-normal leading-6 text-gray-800">
              Please feel free to contact us with any questions you may have.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;

interface QuestionProps {
  question: string;
  answer: string;
  id: number;
  openAnsSection: (id: number) => void;
  currentQuestion: number;
}

const Question = ({
  question,
  answer,
  id,
  openAnsSection,
  currentQuestion,
}: QuestionProps) => {
  const [answerHeight, setAnswerHeight] = useState(0);
  const answerRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (currentQuestion === id && answerRef.current) {
      setAnswerHeight(answerRef.current.scrollHeight);
    } else {
      setAnswerHeight(0);
    }
  }, [currentQuestion, id]);

  return (
    <div onClick={() => openAnsSection(id)} className="cursor-pointer">
      <div className="flex w-full cursor-pointer items-center justify-between">
        <h3 className="text-xl font-semibold leading-5  text-gray-700 ">
          {question}
        </h3>
        <button
          aria-label="too"
          className="cursor-pointer text-gray-800"
          onClick={() => openAnsSection(id)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path4"
              d="M10 4.1665V15.8332"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              visibility={currentQuestion === id ? "hidden" : "visible"}
            />
            <path
              d="M4.16602 10H15.8327"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        ref={answerRef}
        style={{
          height: currentQuestion === id ? answerHeight + 16 : answerHeight,
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p
          className={`font-normal transition-all duration-500 ease-in-out ${
            currentQuestion === id && "mt-4"
          } leading-6 text-gray-600`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

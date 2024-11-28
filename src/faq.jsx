import React from 'react'

const faq = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-neutral-700">
          Frequently Asked Questions
        </h2>
      </div>
      {/* End Title */}

      <div className="max-w-5xl mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-500">
              What is an Automated Question Generator?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              An Automated Question Generator is a tool that generates questions automatically based on the input provided. It helps educators, trainers, and students to create quizzes and practice material quickly and efficiently.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-500">
              How does the Automated Question Generator work?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              The generator uses machine learning algorithms to analyze text and generate relevant questions based on the context. It can create multiple-choice, short answer, or true/false questions based on the content provided.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-500">
              Can I customize the questions generated?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Yes, you can customize the questions to suit your needs. You can specify the difficulty level, type of questions, and even the subject or topic for generating questions.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-500">
              Is the tool compatible with different formats?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Yes, the Automated Question Generator supports multiple formats, including quizzes in Word documents, PDF, and online quiz formats. You can export and share the generated questions easily.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-500">
              Can the tool handle different types of content?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              The tool is capable of processing various types of content, including articles, books, web pages, and even audio transcriptions. It can generate questions based on any text input.
            </p>
          </div>
          {/* End Col */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-500">
              Is there a trial version available?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Yes, we offer a free trial version that allows you to generate a limited number of questions. You can explore the tool’s features and decide whether it fits your needs before subscribing to a paid plan.
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>

    </>
  )
}

export default faq

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import solutions from '@site/static/data/solutions.json';

function HeroBanner() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1>Deploy and Manage Cybersecurity Solutions. Seamlessly.</h1>
        <h2>
          MutableSecurity is a platform for automating the lifecycle of
          cybersecurity solutions. Anchored in open-source, it will bridge the
          gap between vendors and their customers by offering a marketplace of
          cybersecurity solutions in which administrators can easily pick from
          recommendations tailored to their IT infrastructure's requirements.
        </h2>
      </div>
    </header>
  );
}

function TerminalDemo() {
  return (
    <div className={clsx('container', styles.terminal)}>
      <img src="/images/terminal.svg" />
    </div>
  );
}

function SupportedSolutionsSection() {
  return (
    <div className={clsx('container', styles.solutions)}>
      <h1>The Cybersecurity Solutions We Support</h1>
      <SolutionsCards />
    </div>
  );
}

function SolutionCard(props) {
  let imagePath = '/images/solutions/' + props.identifier + '.webp';
  let docLink = 'docs/users/modules/' + props.identifier;

  let status_badge = '';
  switch (props.status) {
    case 'production':
      status_badge = <span class="badge badge--success">Production</span>;
      break;
    case 'refactoring':
      status_badge = (
        <span class="badge badge--warning">Under refactoring</span>
      );
      break;
    case 'under_development':
      status_badge = <span class="badge badge--info">Under development</span>;
      break;
  }

  let category_badges = props.categories.map((category) => (
    <span class="badge badge--primary">{category}</span>
  ));

  return (
    <div class="col col--4">
      <div className={clsx('card', styles.solutionCard)}>
        <div class="card__header">
          <img src={imagePath}></img>
          <h3>{props.fullName}</h3>
        </div>
        <div class="card__body">
          <p>{props.description}</p>
          {category_badges}
          <br />
          {status_badge}
        </div>
        <div class="card__footer">
          <a href={docLink}>
            <button class="button button--secondary button--block">
              Documentation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function SolutionsCards() {
  let solutionsCards = solutions.map((solution) => (
    <SolutionCard
      identifier={solution.identifier}
      fullName={solution.full_name}
      description={solution.description}
      status={solution.status}
      categories={solution.categories}
    />
  ));

  return <div className="row">{solutionsCards}</div>;
}

function ContactSection() {
  return (
    <div className={clsx('container', styles.form)}>
      <h1 id="contact-section"> We'd Love To Hear From You </h1>
      <h2>
        {' '}
        Do you require solutions to defend your infrastructure against attackers
        but lack the time, budget, or personnel to do so? Or do you simply want
        to provide feedback? Drop us a line using the form below or send us an
        email at <code>hello@mutablesecurity.io</code>!{' '}
      </h2>
      <TallyForm />
    </div>
  );
}

function TallyForm() {
  return (
    <iframe
      src="https://tally.so/embed/wA7j4y?alignLeft=1&hideTitle=1&transparentBackground=1"
      width="100%"
      height="300"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      title="null"
    ></iframe>
  );
}

export default function Home() {
  return (
    <Layout description="MutableSecurity">
      <HeroBanner />
      <TerminalDemo />
      <SupportedSolutionsSection />
      <ContactSection />
    </Layout>
  );
}

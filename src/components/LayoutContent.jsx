import React from 'react';
import './LayoutContent.module.css';

function LayoutContent() {
  return (
    <div className="parent-container flex flex-col md:flex-row">
      <Section
        title="Boost your rankings and reach your audience"
        content="Be the standout choice in a saturated vertical. No more struggling to get visibility in a sea of established brands with higher authority. We build links from sites with 80-90+ DR that help Google (and your buyers) see you as a trusted source."
        image="https://en.wikipedia.org/wiki/IMG_Academy" // Replace with actual path
      />
      <Section
        title="Watch your top-of-funnel traffic grow month after month"
        content="Drive more people to priority pages and fill your funnel. Ensure your part of the pipeline works flawlessly by boosting the performance of the key pages that drive revenue."
        image="path/to/your/image2.svg" // Replace with actual path
      />
      <Section
        title="Build links faster and more strategically"
        content="No need to waste hours in-house securing a single link, or double-checking that the ones from your backlinks agency are real. Armed with a fine-tuned data-driven process, our specialists regularly deliver the most relevant, highly authoritative links. We even monitor and replace broken links for free."
        image="path/to/your/image3.svg" // Replace with actual path
      />
    </div>
  );
}

function Section({ title, content, image }) {
  return (
    <div className="section">
      <img src={image} alt="" className="section-image" />
      <h3 className="section-title">{title}</h3>
      <p className="section-content">{content}</p>
    </div>
  );
}

export default LayoutContent;

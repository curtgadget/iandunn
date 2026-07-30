---
title: Build it to run without you
description: Two-plus years running a PM-less engineering team inside Pinterest's ad sales org — and why the goal, for systems and for leaders, is to stop being needed.
date: 2026-07-29
category: Leading
---

I recently read James Hawkins' piece on how [product management is broken](https://newsletter.posthog.com/p/product-management-is-broken-engineers) and how PostHog lets engineers drive product decisions. It resonated — hard. Not because I work at a startup where that's expected, but because I manage an engineering team inside a large public company where it's not.

For the last two-plus years, I've run a small engineering team at Pinterest embedded in the ad sales org. We have no product manager. No designer. No TPM. Just a handful of engineers building internal tools for account teams who manage some of the largest advertisers in the world.

And we ship faster, with fewer people, than teams ten times our size.

That's not a flex. It's the direct result of what happens when engineers own the product — and you build the system so it doesn't depend on any one person. Including you.

---

## The accidental experiment

My team wasn't designed to be a case study in product engineering. We ended up here by necessity. We sit inside a Go-To-Market organization — not the product engineering org. Nobody assigned us a PM because, structurally, we weren't supposed to need one. We were a small support team that built dashboards and reports.

But something happened. The problems we were asked to solve kept getting more complex, and the tools we built kept getting more useful. Account teams started relying on what we shipped — sometimes more than the platform's own native tools. Some of what we built eventually graduated into the core product.

We weren't following a playbook. We were just doing what made sense: talk to the people using our tools, understand their actual problem, build something, ship it, and iterate. There was no roadmap review. No PRD handoff. No six-week design sprint before writing a line of code.

Engineers talked to users. Engineers decided what to build. Engineers shipped.

Sound familiar? That's basically the PostHog model — except we arrived at it from inside a 10,000-person company, not a startup with a blank canvas.

---

## Why it works: proximity builds judgment

Hawkins makes the case that engineers are usually right about what to build because they understand what's technically possible. That's true, but I think it's only half the story.

The deeper advantage is proximity.

When an engineer sits in a scoping call with an account team and hears them describe — in their own words — why a client is upset about delivery pacing, that engineer doesn't just understand the problem. They understand the *shape* of it. They know which data is available, which joins are expensive, which metrics are unreliable, and which corner cases will blow up at scale.

A PM in that same meeting would write a requirements doc. The engineer writes a solution.

This isn't about PMs being bad at their jobs — most of the PMs I've worked with are excellent. It's about information loss. Every handoff between the person who hears the problem and the person who solves it introduces a gap. The PM's job, in the traditional model, is to compress a messy, human, context-rich conversation into a clean spec. But the mess is where the insight lives. When engineers are in the room, they absorb the mess directly. They develop judgment — not from reading user research summaries, but from watching someone struggle with their tool in real time.

That kind of judgment isn't mystical. It's pattern recognition built from repeated exposure to real problems and real users. And it's the foundation of building systems that eventually run without you — because the people closest to the problem are the ones making the decisions.

---

## What "no PM" actually means

Let me be clear about what our setup is and isn't.

Having no PM doesn't mean no one thinks about the product. It means the engineers think about the product. Every scoping call, every prioritization decision, every tradeoff — those conversations happen between engineers and the people using our tools. There's no translation layer.

It also doesn't mean no accountability. We track usage. We measure impact. We know how many people use each tool, how often, and what they're doing with it. Some of our tools have become essential daily infrastructure for the teams that use them. That's not luck. It's the result of engineers who care about whether their work actually matters.

What we skip is the ceremony. No PRDs that take two weeks to write and are outdated by the time they're approved. No design reviews for internal tools where the user is sitting in the next Slack channel and can just tell us if something's confusing. No quarterly roadmap theater where everyone pretends to know what they'll build three months from now.

Instead, we have a shared doc of problems we know about, ranked by how much they matter. Engineers pick what to work on. We sync weekly. When something's done, it ships. When it's not working, we change it.

The system works because it doesn't need a single person orchestrating every decision. That's the whole point.

---

## The founder instinct

I think this comes naturally to me because I spent the first eight years of my career building my own thing.

Right out of college, I started a ringtone business — back when that was a real industry. I built the product, ran the servers, handled the billing, talked to customers, and fixed bugs at 2 AM. There was no product manager because there was no one else. Every decision — what to build, what to skip, when to ship, when to kill a feature — was mine.

That experience rewired how I think about engineering. I never learned to wait for a spec. I learned to identify a problem, form an opinion about the solution, and ship something. If I was wrong, I'd hear about it from customers within hours and fix it by morning.

But the deeper lesson took longer to learn: the business couldn't scale as long as every decision ran through me. The best version of that company would have been one where the system — the product, the workflows, the customer feedback loops — ran even when I wasn't at the keyboard.

When I eventually moved into traditional engineering roles — building for Disney, NBC, Netflix, Spotify, and now Pinterest — I kept that instinct. Not because I was trying to be different, but because the alternative felt slow and disconnected. Why would I wait for someone to tell me what to build when I could just go talk to the user?

That instinct is what I try to cultivate on my team. I want engineers who have opinions about the product, not just the code. Engineers who push back on requirements that don't make sense. Engineers who, when they see a user struggling, feel the same itch I felt running my own business: *I should fix this.* And critically — engineers who can act on that itch without waiting for me to tell them it's okay.

---

## The hard part: building trust without authority

Here's where my story diverges from PostHog's.

At PostHog, the CEO endorsed this model. Engineers have formal authority to drive product decisions. The company is structured for it.

At Pinterest — or any large company — you don't get that luxury. My team has no formal product authority. We're not in the product engineering org. We don't own a product area. Officially, we're a support function.

So how do you build a self-sustaining system without organizational authority?

You earn it through output.

Every tool we ship that saves an account team hours of manual work earns us a little more trust. Every time we deliver in six weeks what someone estimated would take a quarter earns us a little more autonomy. Every time a stakeholder realizes they can come to us with a problem — not a spec — and walk away with a working solution, the dynamic shifts.

You don't need the title of product engineer to think like one. You just need to give a damn about whether what you build is actually useful.

The tricky part is that this kind of trust is fragile. It has to be earned repeatedly. And it requires something that a lot of engineering teams skip: telling the story of your work. Execution alone doesn't create visibility. You have to help people understand what you built, why it matters, and what's possible next. That's the part I'm still working on, honestly. I come from a "put your head down and do the work" school of thought. I'm learning that the work doesn't speak for itself — you have to speak for it too.

But here's the thing I've come to believe: if you've built the system right, the work eventually speaks louder than you ever could. The best tools don't need you evangelizing them. People find them, use them, and tell other people. That's when you know you've built something that runs without you.

---

## What I tell my team

I don't use the phrase "product engineering" with my team. I just try to create the conditions where the system doesn't depend on any one person — including me:

**Talk to the user, not about the user.** Our engineers sit in scoping calls. They hear the pain firsthand. They ask follow-up questions. By the time they write any code, they've already internalized the problem in a way no spec could communicate.

**Have an opinion before you have a ticket.** I want my engineers to walk into a planning discussion with a point of view — not wait to be assigned work. "I think this is the wrong approach because..." is a sentence I want to hear more often.

**Ship the smallest thing that tests the thesis.** We don't build features. We build hypotheses. The first version is always small, sometimes embarrassingly so. But it's real, it's in front of users, and it's generating feedback within days, not months.

**Own the outcome, not just the code.** Writing clean code is table stakes. I care about whether the thing you shipped is actually being used, and whether it's solving the problem we set out to solve. If usage is flat, that's engineering's problem too — not just a product gap.

**Cut what doesn't serve.** This might be the hardest one. Knowing what *not* to build is more important than knowing what to build. Every feature you skip is time you can spend on one that matters.

**Build it so I'm not needed.** The ultimate test of a system — and a team — is whether it works when the leader isn't in the room. If my team can't ship, prioritize, and make decisions without me, I haven't built a system. I've built a dependency.

---

## The side project proof

The clearest evidence that this philosophy works isn't at Pinterest — it's in the things I build on nights and weekends.

I ship side projects the same way I run my team: find a problem, form an opinion, build the smallest version that tests the thesis, and ship it.

[My soccer app](/projects#futave) doesn't show you every match — it tells you which one is worth your time tonight. That's an opinion. The algorithm makes a call before kickoff, and it's allowed to be wrong. Most apps hedge. Mine takes a position. And once it's running, it runs without me — the Wave Detector scores matches whether I'm watching or not.

[My therapy companion app](/projects#therabasics) was born from a conviction that engagement metrics have no place in clinical work. The dominant apps gamify therapy. Ours doesn't. That's a product decision, and it was made by the people building it — not by a PM weighing engagement KPIs.

These aren't side projects in the "I'm learning React" sense. They're products with users, built on the same principle: engineers who care about the problem will build a better solution than engineers who are handed a spec. And the best ones keep running after you walk away.

---

## The goal is to disappear

PostHog calls their engineers "product engineers." I think about it differently.

The best systems run without you.

The best tools don't need you explaining why they're useful — people find them and rely on them because they solve a real problem. The best teams don't need you in every meeting — they have the judgment, the context, and the permission to make decisions on their own. The best products don't need a PM translating user needs — the engineers already know, because they've been in the room.

Every engineer has the capacity for this kind of ownership. Most are never given the chance to develop it because the system insulates them from the problem. The PM absorbs the context. The designer absorbs the aesthetics. The TPM absorbs the timeline. By the time a task reaches the engineer, all the interesting decisions have already been made.

The best thing you can do for an engineer is reverse that flow. Put them in front of the user. Let them hear the problem raw. Let them form their own opinion before anyone else shapes it. Then get out of the way and let them build.

And if you've done your job right, the thing they build will keep running long after you've moved on to the next problem. That's not a failure of leadership. That's the whole point.

import React from 'react'
import { storiesOf } from '@storybook/react'
import Hero from '../index'

import cover from '../hero-bg.png'

storiesOf('Hero', module)
  .add('default title', () => <Hero />)
  .add('change background color', () => <Hero backgroundColor="#c0c0c0" />)
  .add('change title', () => <Hero title="Another title" />)
  .add('with description', () => (
    <Hero
      description="Est repudiandae maxime. Fugiat facere nesciunt dolorem aut
        itaque est iusto corporis error. Est et accusamus deserunt.
        Est voluptatum odio. Aut maxime officiis id sed et molestiae et aspernatur."
    />
  ))
  .add('with cover image', () => <Hero cover={cover} />)
  .add('with description and cover image', () => (
    <Hero
      description="Ullam similique qui quia ab. Quas autem dolor quod nisi eum repellat
        dolores eveniet repellendus. Nemo laboriosam error facere ab nulla saepe nihil
        aliquam maiores. Vero tenetur voluptatibus quas est aut. Repellendus cumque a
        quod maiores ducimus adipisci eum omnis quidem. Minus expedita aut optio fugiat."
      cover={cover}
    />
  ))

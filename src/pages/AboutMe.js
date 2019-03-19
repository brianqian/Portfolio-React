import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #0c1821;
  color: #ccc9dc;
  font-family: 'Roboto';
  height: 60vh;
  text-align: center;
  padding: 3rem;
`;

class AboutMe extends Component {
  render() {
    return (
      <Container id="about">
        <p>
          general about me. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi labore
          laboriosam reprehenderit ex, magnam eius quasi veritatis repudiandae doloribus tempora
          amet. Accusamus eius soluta, enim quo aliquam aliquid laudantium assumenda culpa excepturi
          deleniti cum minus architecto modi voluptatum, ut vitae et aspernatur quisquam vero
          expedita! Dignissimos, consectetur beatae. Impedit et numquam recusandae quam id laborum
          quasi quaerat vero error nulla excepturi veniam, molestias voluptatum! Cupiditate pariatur
          incidunt, neque ullam perspiciatis ipsa aperiam non! Minima sed nam vel nulla voluptates
          sequi error, unde quos quibusdam, quo velit asperiores consequatur. Eum quo nam qui ad
          placeat ullam reprehenderit amet dolorem similique dolorum harum perferendis, illum
          laboriosam quasi. Consectetur voluptas corporis vero repellendus delectus assumenda, autem
          rerum dolor reiciendis odio dicta sit officia veniam beatae, itaque aut asperiores
          inventore sed, qui nemo at. Qui sint provident, obcaecati assumenda quas animi tenetur a
          ullam, labore libero, praesentium dolor. Maxime consequuntur perspiciatis doloribus totam
          sunt soluta, pariatur recusandae possimus officia corporis veritatis. Rerum culpa deserunt
          nemo delectus voluptatem exercitationem reiciendis magnam debitis id libero dignissimos
          officia assumenda itaque commodi ullam fuga mollitia nobis ipsam, numquam voluptates
          quisquam. Quisquam, quis. Repellat, rerum. Cumque sunt fugit impedit commodi in molestiae
          qui? Aliquid numquam ipsum odit exercitationem magnam.
        </p>
      </Container>
    );
  }
}

export default AboutMe;

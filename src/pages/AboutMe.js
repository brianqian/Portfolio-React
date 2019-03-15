import React, { Component } from 'react';
import Header from '../components/Header';
import { Route } from 'react-router-dom';
import { fadeIn, fadeOut } from '../utils/keyframes';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 85vh;
  &.page-enter {
    animation: ${fadeIn} 1s linear;
  }
  &.page-exit {
    animation: ${fadeOut} 1s linear;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <p>general about me.</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias cumque excepturi sequi
        obcaecati consectetur optio, blanditiis molestiae, corrupti harum laudantium facere! Beatae
        molestias dicta cumque dolorem qui! Odio aliquid possimus harum illo optio atque molestiae
        inventore provident, ea blanditiis, veritatis reiciendis consequatur, repellat
        exercitationem totam aspernatur autem quae voluptas? Dolorum eum quis voluptates autem
        praesentium incidunt reiciendis ab eveniet dolores. Dolores, voluptate ducimus. Ex culpa nam
        velit id sint cupiditate modi cumque deleniti et blanditiis, dolor voluptatem iste at minus
        accusantium quisquam explicabo earum ducimus fugiat? Vero natus, tempore cumque provident
        consequatur distinctio veniam nam ratione et hic quo debitis sint laudantium? Dolore autem
        facilis debitis, sed, incidunt, optio deleniti nesciunt alias et est consequuntur minima
        nulla cupiditate praesentium similique doloremque amet ipsam consectetur architecto corrupti
        minus cumque! Consequatur quo, assumenda voluptate tempora facere quia beatae vitae enim
        reiciendis aliquam cupiditate nesciunt debitis aspernatur asperiores, totam eligendi natus
        ipsa adipisci tempore a facilis odio ea pariatur? Aliquam quis sed, voluptate nulla veniam
        nemo minus, aspernatur facilis quae dolorum ex fuga dignissimos libero eligendi omnis rem
        esse. Perspiciatis consequuntur quidem pariatur aut ducimus a omnis provident ipsa natus
        saepe consectetur rerum in atque maiores perferendis, quibusdam voluptatem quo fugit
        similique voluptates laboriosam. Ea, nemo unde sequi neque molestias voluptatum repellat
        enim commodi possimus, amet laboriosam vitae quos illo autem incidunt magni dicta earum? Hic
        perspiciatis ex aspernatur assumenda excepturi tenetur, nemo aut? Fugit blanditiis tenetur
        eaque incidunt quibusdam non accusamus asperiores quo laudantium porro exercitationem quas
        in vel dolorum maxime qui reiciendis modi similique quia, excepturi hic nulla. Placeat
        porro, quidem nemo magni dicta expedita tempora, repudiandae totam, facilis sunt labore
        minus. Accusamus explicabo similique at repudiandae dignissimos quae sequi temporibus
        blanditiis nemo quasi ut corporis, quod reprehenderit eius quis nihil repellat distinctio
        debitis ullam eos quos. Repudiandae iure id, nostrum minima eaque inventore vel odit enim,
        dolore suscipit nesciunt saepe totam veniam porro voluptas sint voluptatem molestiae natus
        minus quos nam? Illum mollitia beatae facere tenetur officia dicta ab eius fugiat, officiis
        blanditiis, nobis vitae sit odio laborum necessitatibus alias dolorem perferendis obcaecati
        ratione temporibus aliquam asperiores dolore repellat repudiandae! Iusto tempora
        consequuntur odit reprehenderit libero sint. Sint, aliquam tenetur. Magnam quia ipsa
        molestias officiis hic cum maxime quis possimus fugit, exercitationem id eaque. Totam
        architecto accusamus voluptate in incidunt, voluptatibus ea officiis perferendis, quam ullam
        iusto, iure distinctio vel dolorem neque libero. Quos architecto ipsam laborum! Iusto
        aliquam ad soluta quas, ratione fuga possimus atque consequatur magnam facere blanditiis at
        eum, ullam commodi aut rem pariatur officia itaque reiciendis molestiae explicabo sit
        maiores. Rem rerum vero vel repellat laudantium, maxime eum perferendis facere in fuga nisi
        inventore quidem, debitis labore nobis dolor sunt, consectetur saepe aliquam dicta
        voluptatem nesciunt. Laborum, ducimus eum earum ut commodi quasi totam maxime ipsum ea
        adipisci quam nihil dolore, animi itaque delectus dolorum, optio incidunt ratione doloribus
        harum esse. Autem ex, doloremque saepe dignissimos voluptas ipsam. Aspernatur sit architecto
        enim culpa id hic mollitia magni exercitationem laborum? Non provident ducimus sapiente
        similique doloremque omnis facere blanditiis molestias commodi ex quam odio ipsa distinctio
        consequatur ad, neque eum architecto temporibus magni ab officia qui. Asperiores qui eius
        deserunt, quod reprehenderit, tempora repellat ullam provident voluptatibus perferendis
        praesentium molestias tempore aliquam dolorem saepe, vitae iure quibusdam nobis laboriosam
        illum esse debitis. Repellendus optio reiciendis asperiores libero, eveniet quaerat
        voluptates minima! Natus debitis inventore itaque ea numquam vel laudantium eligendi impedit
        laboriosam architecto dolorum, necessitatibus at ratione exercitationem explicabo temporibus
        atque. Quis modi repellat adipisci optio tenetur dolore. Repudiandae cum consequuntur
        laborum nihil nobis alias dolorum magnam quos ullam asperiores? Ab reprehenderit nihil
        voluptate velit quaerat, magnam dolor? Iure necessitatibus et debitis amet incidunt ad,
        animi sint. Doloribus sequi excepturi error quibusdam officia ab quisquam voluptate nulla
        eos ipsam reiciendis ea amet nobis in porro optio quod voluptatem consequatur, corporis
        culpa laborum accusantium et dolore incidunt! Ipsum quo voluptatum illo perspiciatis dicta,
        nostrum ratione. Obcaecati earum suscipit commodi necessitatibus sapiente magnam a minima
        tempora veritatis ab aliquam laborum, quo odit! Tempora, cumque maiores. Reiciendis sapiente
        deserunt, reprehenderit fugit earum error possimus? Ea eligendi enim, fugiat ab distinctio
        obcaecati voluptatem rerum aspernatur cum harum molestiae, labore excepturi in non rem quasi
        voluptas ut nesciunt quisquam atque corporis! Suscipit, consectetur. Fugit voluptas, hic
        mollitia similique voluptate aperiam soluta atque ullam, aliquam cumque esse ea! Sequi
        dolorem ipsam fugiat quas optio ut, modi fugit quos ab sit asperiores voluptatum architecto
        sint id quaerat illo, quam sunt eaque nemo mollitia a neque, inventore officiis. Hic et,
        quod eum, architecto accusantium consequuntur in itaque dolorem impedit, voluptatum placeat!
        Sed laboriosam mollitia non maxime dolores. Ipsum dolores nobis dolorem, accusamus quaerat
        temporibus quasi sunt enim nostrum hic incidunt molestiae rerum ducimus quibusdam! Magni
        animi corporis magnam nobis enim quae, accusamus provident nisi dolor sed adipisci ratione
        odio minima aliquid, recusandae voluptatem quia, iure sequi suscipit nihil impedit doloribus
        illo? Facere exercitationem dignissimos sit ut facilis et optio dolore praesentium suscipit
        ad ea provident, obcaecati impedit corporis blanditiis error quibusdam repellat eveniet,
        voluptatibus nostrum, laborum repudiandae voluptatem molestias nobis. Soluta saepe aliquid
        quibusdam alias dolore? Rerum optio ea fugit esse facere saepe odio, assumenda quo neque
        temporibus magni animi atque dolore repellat. Atque sit recusandae nemo quia, ullam cumque
        quidem, deleniti iusto sequi magni mollitia tenetur molestias earum at autem animi suscipit
        esse molestiae magnam architecto, ducimus aut non ipsum excepturi. Alias cum enim commodi.
        Deserunt possimus cumque iusto soluta dolorem sapiente, corrupti quibusdam optio!
        Repellendus reiciendis minus molestiae placeat. Itaque corrupti placeat quisquam dolorem
        magnam maxime praesentium hic expedita, repellat dolore a distinctio maiores voluptatibus.
        Perspiciatis consequatur magnam deserunt quidem exercitationem repellendus nam numquam sed?
        Reprehenderit, ratione. Accusantium praesentium ullam minima animi sint cumque doloremque
        nulla, voluptatibus corporis, ipsum aut voluptatum porro suscipit? Explicabo, quaerat itaque
        magnam quibusdam laboriosam illum eum minima hic error inventore ullam asperiores culpa
        officia tempore iste corrupti ut minus sunt magni fugit impedit corporis labore cumque.
        Libero laboriosam sit nulla in omnis eaque, numquam, placeat a non, deleniti sint amet
        expedita blanditiis praesentium! Illum est perspiciatis animi.
      </Container>
    );
  }
}

export default AboutMe;

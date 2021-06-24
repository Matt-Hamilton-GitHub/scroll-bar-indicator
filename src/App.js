import "./styles.css";

export default function App() {
  let progress = document.getElementById("progressbar");
  let totalHeight = document.body.scrollHeight - window.innerHeight;

  window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  };
  console.log();

  return (
    <main>
      <div id="progressbar"></div>
      <div id="scrollPath"></div>
      <section>
        <h2>Creative Scroll Bar </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
          feugiat in fermentum posuere urna nec tincidunt praesent semper. Ut
          consequat semper viverra nam libero justo. Sed odio morbi quis commodo
          odio aenean. Vestibulum mattis ullamcorper velit sed ullamcorper
          morbi. Suspendisse interdum consectetur libero id faucibus nisl
          tincidunt. Dui faucibus in ornare quam viverra orci sagittis eu. Quam
          adipiscing vitae proin sagittis. Etiam tempor orci eu lobortis
          elementum. Eget aliquet nibh praesent tristique magna sit amet purus.
          Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Eu mi
          bibendum neque egestas congue quisque egestas diam in. Iaculis at erat
          pellentesque adipiscing commodo elit at imperdiet dui. Commodo viverra
          maecenas accumsan lacus. Sodales ut eu sem integer vitae justo eget
          magna. Integer quis auctor elit sed vulputate. Maecenas volutpat
          blandit aliquam etiam erat velit scelerisque in. Volutpat commodo sed
          egestas egestas fringilla. Quis ipsum suspendisse ultrices gravida
          dictum fusce. Pretium fusce id velit ut tortor pretium viverra
          suspendisse potenti. Gravida in fermentum et sollicitudin ac orci.
          Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.
          Est lorem ipsum dolor sit amet consectetur. Cras semper auctor neque
          vitae tempus quam pellentesque. Vulputate dignissim suspendisse in
          est. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
          Elit duis tristique sollicitudin nibh sit amet commodo nulla. Donec et
          odio pellentesque diam volutpat commodo sed. Risus in hendrerit
          gravida rutrum quisque non tellus orci ac. Sit amet nulla facilisi
          morbi tempus iaculis urna id volutpat. Gravida arcu ac tortor
          dignissim convallis. Phasellus faucibus scelerisque eleifend donec
          pretium vulputate. Sollicitudin ac orci phasellus egestas tellus
          rutrum tellus. Vulputate enim nulla aliquet porttitor lacus luctus.
          Aenean et tortor at risus viverra adipiscing at in. Scelerisque varius
          morbi enim nunc faucibus a pellentesque. Mauris sit amet massa vitae.
          Nisl tincidunt eget nullam non. Lacus vestibulum sed arcu non odio
          euismod lacinia. Velit dignissim sodales ut eu sem integer. Dui
          accumsan sit amet nulla facilisi morbi. Consequat semper viverra nam
          libero justo laoreet. Arcu dui vivamus arcu felis bibendum ut
          tristique. Consequat mauris nunc congue nisi vitae suscipit. Pretium
          fusce id velit ut tortor pretium viverra. Porttitor leo a diam
          sollicitudin tempor id eu. Orci a scelerisque purus semper. Egestas
          integer eget aliquet nibh praesent tristique magna sit. Amet massa
          vitae tortor condimentum lacinia quis. Gravida in fermentum et
          sollicitudin. Viverra orci sagittis eu volutpat odio facilisis mauris
          sit amet. Id interdum velit laoreet id. Lacus viverra vitae congue eu
          consequat ac. Tortor at risus viverra adipiscing at in. Neque aliquam
          vestibulum morbi blandit cursus risus at ultrices. Maecenas pharetra
          convallis posuere morbi leo urna molestie at elementum. Massa eget
          egestas purus viverra accumsan. Aliquet risus feugiat in ante metus
          dictum. Ullamcorper eget nulla facilisi etiam dignissim diam quis.
          Morbi tristique senectus et netus et malesuada fames. Sit amet aliquam
          id diam maecenas ultricies mi. Tristique nulla aliquet enim tortor at
          auctor urna. Et egestas quis ipsum suspendisse ultrices gravida dictum
          fusce ut. Aliquam etiam erat velit scelerisque. Leo integer malesuada
          nunc vel risus commodo viverra maecenas. Et egestas quis ipsum
          suspendisse ultrices. Pretium nibh ipsum consequat nisl vel pretium
          lectus quam. Amet venenatis urna cursus eget. Nisl suscipit adipiscing
          bibendum est ultricies integer quis. Scelerisque felis imperdiet proin
          fermentum leo vel orci porta. Urna duis convallis convallis tellus.
          Nisl suscipit adipiscing bibendum est. Volutpat sed cras ornare arcu
          dui vivamus arcu. Diam vel quam elementum pulvinar etiam non quam. At
          tellus at urna condimentum mattis. Mauris rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar. Amet commodo nulla facilisi
          nullam vehicula ipsum. Aliquam sem et tortor consequat id porta nibh
          venenatis cras. Dolor purus non enim praesent elementum facilisis leo
          vel. Feugiat nisl pretium fusce id velit ut tortor pretium. Odio
          tempor orci dapibus ultrices in. Dignissim cras tincidunt lobortis
          feugiat vivamus. Neque ornare aenean euismod elementum nisi quis
          eleifend quam. Bibendum ut tristique et egestas quis ipsum.
          Scelerisque eu ultrices vitae auctor eu augue ut lectus. Eget egestas
          purus viverra accumsan in nisl nisi. Purus ut faucibus pulvinar
          elementum. Condimentum vitae sapien pellentesque habitant morbi
          tristique senectus. Et malesuada fames ac turpis. Pulvinar proin
          gravida hendrerit lectus. Eu volutpat odio facilisis mauris sit amet
          massa vitae. Auctor urna nunc id cursus metus aliquam. Eleifend quam
          adipiscing vitae proin sagittis nisl rhoncus. Sodales ut etiam sit
          amet nisl purus in mollis. Tortor dignissim convallis aenean et tortor
          at risus viverra. Leo duis ut diam quam nulla porttitor massa id
          neque. Eget egestas purus viverra accumsan. Condimentum mattis
          pellentesque id nibh tortor id aliquet lectus proin. Hac habitasse
          platea dictumst quisque sagittis purus sit. Phasellus egestas tellus
          rutrum tellus pellentesque eu tincidunt tortor aliquam. Dui nunc
          mattis enim ut tellus elementum sagittis vitae et. Quis blandit turpis
          cursus in hac. Leo a diam sollicitudin tempor id. Sagittis purus sit
          amet volutpat consequat mauris nunc. Ipsum dolor sit amet consectetur.
          Mauris sit amet massa vitae. Pretium viverra suspendisse potenti
          nullam. Aliquam sem fringilla ut morbi tincidunt augue interdum velit
          euismod. At varius vel pharetra vel. Tristique magna sit amet purus.
          Consectetur libero id faucibus nisl tincidunt eget. Bibendum enim
          facilisis gravida neque convallis a. Enim praesent elementum facilisis
          leo vel fringilla est ullamcorper eget. Mi in nulla posuere
          sollicitudin aliquam ultrices. In nulla posuere sollicitudin aliquam
          ultrices sagittis orci. Nisl pretium fusce id velit ut tortor.
          Accumsan tortor posuere ac ut consequat. Molestie at elementum eu
          facilisis sed odio morbi quis commodo. Ullamcorper morbi tincidunt
          ornare massa eget. Ac feugiat sed lectus vestibulum. Elit ut aliquam
          purus sit amet luctus venenatis. Nunc eget lorem dolor sed viverra. Id
          faucibus nisl tincidunt eget. Pharetra sit amet aliquam id diam
          maecenas ultricies mi. Amet justo donec enim diam vulputate ut
          pharetra sit amet. At risus viverra adipiscing at in tellus. Turpis
          nunc eget lorem dolor sed viverra. Odio facilisis mauris sit amet
          massa vitae tortor condimentum. Nulla malesuada pellentesque elit eget
          gravida cum sociis. Tempus iaculis urna id volutpat lacus laoreet non.
          Vel quam elementum pulvinar etiam. Est ante in nibh mauris cursus
          mattis molestie a iaculis. Diam vulputate ut pharetra sit amet
          aliquam. Eu nisl nunc mi ipsum faucibus vitae aliquet. Aliquet nibh
          praesent tristique magna. Porta lorem mollis aliquam ut porttitor leo
          a. A scelerisque purus semper eget. Pellentesque eu tincidunt tortor
          aliquam nulla facilisi cras fermentum odio. Sed odio morbi quis
          commodo odio aenean sed adipiscing. Nullam eget felis eget nunc
          lobortis mattis aliquam faucibus purus. Odio morbi quis commodo odio
          aenean sed adipiscing diam donec.
        </p>
      </section>
      <script type="text/javascript"></script>
    </main>
  );
}

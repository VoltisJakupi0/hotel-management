import { Row, Spin, Button, Col } from "antd";
import React, { ReactElement, useState } from "react";
import useHideModal from "../../../modal/hooks/useHideModal";
import { Rule } from "antd/es/form";
import img1 from "../../../../assets/img/helpimgs/1.png";
import img2 from "../../../../assets/img/helpimgs/2.png";
import img3 from "../../../../assets/img/helpimgs/3.png";
import img4 from "../../../../assets/img/helpimgs/4.png";
import img5 from "../../../../assets/img/helpimgs/5.png";
import img6 from "../../../../assets/img/helpimgs/6.png";
import img7 from "../../../../assets/img/helpimgs/7.png";
import img8 from "../../../../assets/img/helpimgs/8.png";
import img9 from "../../../../assets/img/helpimgs/9.png";
import img10 from "../../../../assets/img/helpimgs/10.png";
import img11 from "../../../../assets/img/helpimgs/11.png";
import img12 from "../../../../assets/img/helpimgs/12.png";
import img13 from "../../../../assets/img/helpimgs/13.png";
import img14 from "../../../../assets/img/helpimgs/14.png";
import img15 from "../../../../assets/img/helpimgs/15.png";
import img16 from "../../../../assets/img/helpimgs/16.png";
import img17 from "../../../../assets/img/helpimgs/17.png";
import img18 from "../../../../assets/img/helpimgs/18.png";
import img19 from "../../../../assets/img/helpimgs/19.png";
import img20 from "../../../../assets/img/helpimgs/20.png";
import img21 from "../../../../assets/img/helpimgs/21.png";
import img22 from "../../../../assets/img/helpimgs/22.png";

import imgE1 from "../../../../assets/img/helpimgs/imgE1.png";
import imgE2 from "../../../../assets/img/helpimgs/imgE2.png";
import imgE3 from "../../../../assets/img/helpimgs/imgE3.png";
import imgE4 from "../../../../assets/img/helpimgs/imgE4.png";
import imgE5 from "../../../../assets/img/helpimgs/imge5.png";
import imgE6 from "../../../../assets/img/helpimgs/imgE6.png";
import imgE7 from "../../../../assets/img/helpimgs/imgE7.png";
import imgE8 from "../../../../assets/img/helpimgs/imgE.png";
import imgE9 from "../../../../assets/img/helpimgs/imgE9.png";
import imgE10 from "../../../../assets/img/helpimgs/imgE10.png";
import imgE11 from "../../../../assets/img/helpimgs/imgE11.png";
import imgE12 from "../../../../assets/img/helpimgs/imgE12.png";
import imgE13 from "../../../../assets/img/helpimgs/imgE13.png";
import imgE14 from "../../../../assets/img/helpimgs/imgE14.png";
import imgE15 from "../../../../assets/img/helpimgs/imgE15.png";
import imgE16 from "../../../../assets/img/helpimgs/imgE16.png";
import imgE17 from "../../../../assets/img/helpimgs/imgE17.png";
import imgE18 from "../../../../assets/img/helpimgs/imgE18.png";
import imgE19 from "../../../../assets/img/helpimgs/imgE19.png";
import imgE20 from "../../../../assets/img/helpimgs/imgE20.png";
import imgE21 from "../../../../assets/img/helpimgs/imgE21.png";
import imgE22 from "../../../../assets/img/helpimgs/imgE22.png";

const helpInfoData = [
  {
    id: 1,
    image: img1,
    title: "1. Dritarja hyrëse – Kyqja/Login.",
    description: `Pasi te hapet aplikacioni, si faqe hyrëse iu shfaqet faqja per kyqje.
    Tek dy butonat e pare zgjedhet gjuha  te cilen deshironi ta perdorni ne aplikacion (Shqip/English). Tek dy hapesirat per shkrim shenohen emaili dhe fjalekalimi, pastaj shtypet butoni Kyqu/Login per te hyre ne aplikacion.`,
  },
  {
    id: 2,
    image: img2,
    title: "2. Dritarja Dhomat",
    description: `Pas kyqjes se suksesshme shfaqet faqja e dhomave. 
    Kur klikohet butoni “Shto +” i cili ndodhet ne kendin e djathte, larte, hapet modali per shkrimin e te dhenave te dhomes.
    `,
  },
  {
    id: 3,
    image: img3,
    title: "2. Dritarja Dhomat.",
    description: `Nese klikohet butoni “Shto” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Tek fusha per kerkim mund te beni kerkimin e dhomave ne baze te numrit te dhomes.
    Tek lista e dhomave mund t’i shikoni dhomat te cilat i ka hoteli.
    Kur klikohen tri pikat horizontale tek ndonje dhome, paraqiten opsionet per Rezervimin e dhomes, Editimin e dhomes dhe Fshirjes se dhomes.`,
  },
  {
    id: 4,
    image: img4,
    title: "2. Dritarja Dhomat.",
    description: `Kur klikohet butoni “Rezervo” paraqitet modali ne te cilin shkruhen te dhenat e rezervimit.`,
  },
  {
    id: 5,
    image: img5,
    title: "2. Dritarja Dhomat.",
    description: `Nese klikohet butoni “Shto” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Kur klikohet butoni “Edito” paraqitet modali ne te cilin shkruhen te dhenat e reja te dhomes.`,
  },
  {
    id: 6,
    image: img6,
    title: "2. Dritarja Dhomat.",
    description: `Nese klikohet butoni “Ruaj” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Kur klikohet butoni “Fshij” fshihet dhoma.`,
  },

  {
    id: 7,
    image: img7,
    title: "3. Dritarja Rezervimi i Dhomave",
    description: `Tek fusha per kerkim mund te beni kerkimin e dhomave te rezervuara ne baze te numrit te dhomes apo emrit te klientit.
    Tek lista e dhomave mund t’i shikoni dhomat te cilat jane te rezervuara.
    Kur klikohen tri pikat horizontale tek ndonje dhome, paraqiten opsionet per Anulimin e rezervimit dhe Editimin e rezervimit.
    `,
  },
  {
    id: 8,
    image: img8,
    title: "3. Dritarja Rezervimi i Dhomave",
    description: `Kur klikohet butoni “Anulo Rezervimin” ben anulimin e rezervimit dhe e nderron statusin ne “Canceled”.
    Kur klikohet butoni “Edito” paraqitet modali ne te cilin shkruhen te dhenat e reja te dhomes se rezervuar..
    `,
  },
  {
    id: 9,
    image: img9,
    title: "3. Dritarja Rezervimi i Dhomave",
    description: `Nese klikohet butoni “Ruaj” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.`,
  },
  {
    id: 10,
    image: img10,
    title: "4. Dritarja Perdoruesit",
    description: `Kur klikohet butoni “Shto +” i cili ndodhet ne kendin e djathte, larte, hapet modali per shkrimin e te dhenave te perdoruesit te ri.`,
  },
  {
    id: 11,
    image: img11,
    title: "4. Dritarja Perdoruesit",
    description: `Nese klikohet butoni “Shto” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Tek fusha per kerkim mund te beni kerkimin e perdoruesve ne baze te emrit, mbiemrit, emailit apo username-s.
    Tek lista e perdoruesve mund t’i shikoni perdoruesit te cilat egzistojne.
    Kur klikohen tri pikat horizontale tek ndonje perdorues, paraqiten opsionet per  Editimin e perdoruesit dhe Fshirjes se perdoruesit.`,
  },
  {
    id: 12,
    image: img12,
    title: "4. Dritarja Perdoruesit",
    description: `Kur klikohet butoni “Edit” paraqitet modali ne te cilin shkruhen te dhenat e reja te perdoruesit`,
  },

  {
    id: 13,
    image: img13,
    title: "4. Dritarja Perdoruesit",
    description: `
    Nese klikohet butoni “Ruaj” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Kur klikohet butoni “Remove” fshihet perdoruesi.
    `,
  },

  {
    id: 14,
    image: img14,
    title: "5. Dritarja Kategorite",
    description: `Kur klikohet butoni “Shto +” i cili ndodhet ne kendin e djathte, larte, hapet modali per shkrimin e te dhenave te kategorise se re.`,
  },
  {
    id: 15,
    image: img15,
    title: "5. Dritarja Kategorite",
    description: `Nese klikohet butoni “Shto” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Tek fusha per kerkim mund te beni kerkimin e kategorive ne baze te emrit te kategorise.
    Tek lista e kategorive mund t’i shikoni kategorite te cilat egzistojne.
    Kur klikohen tri pikat horizontale tek ndonje kategori, paraqiten opsionet per  Editimin e kategorise dhe Fshirjes se kategorise.
    `,
  },
  {
    id: 16,
    image: img16,
    title: "5. Dritarja Kategorite",
    description: `Kur klikohet butoni “Edito” paraqitet modali ne te cilin shkruhen te dhenat e reja te kategorise.`,
  },
  {
    id: 17,
    image: img17,
    title: "5. Dritarja Kategorite",
    description: `Nese klikohet butoni “Ruaj” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Kur klikohet butoni “Fshij” fshihet kategoria.`,
  },
  {
    id: 18,
    image: img18,
    title: "5. Dritarja Kategorite",
    description: `Kur klikohet butoni “Shto +” i cili ndodhet ne kendin e djathte, larte, hapet modali per shkrimin e te dhenave te statusit te ri`,
  },
  {
    id: 19,
    image: img19,
    title: "6. Dritarja Statusi",
    description: `Nese klikohet butoni “Shto” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Tek fusha per kerkim mund te beni kerkimin e statuseve ne baze te emrit te statusit.
    Tek lista e statuseve mund t’i shikoni statuset te cilat egzistojne.
    Kur klikohen tri pikat horizontale tek ndonje status, paraqiten opsionet per  Editimin e statusit dhe Fshirjes se statusit
    `,
  },

  {
    id: 20,
    image: img20,
    title: "6. Dritarja Statusi",
    description: `Kur klikohet butoni “Edito” paraqitet modali ne te cilin shkruhen te dhenat e reja te statusit `,
  },
  {
    id: 21,
    image: img21,
    title: "6. Dritarja Statusi",
    description: `Nese klikohet butoni “Ruaj” ruhen te dhenat e shenuara ne databaze dhe mbyllet modali, ndersa “Mbyll” e mbyll modalin pa i ruajtur te dhenat.
    Kur klikohet butoni “Fshij” fshihet statusi.
    `,
  },
  {
    id: 22,
    image: img22,
    title: "7. Nderrimi i gjuhes dhe shkyqja/logout nga aplikacionit",
    description: `Ne anen e majte, larte, mund te zgjidhet gjuha ne te cilen deshirojme ta perdorim aplikacionin.
    Nese klikohet tek emri i perdoruesit aktiv ne anen e djathte, larte, atehere paraqitet opsioni per shkyqje nga aplikacioni, i cili nese klikohet atehere perdoruesi del nga aplikacioni dhe shfaqet faqja hyrese.
    `,
  },
];

const helpInfoDataEn = [
  {
    id: 1,
    image: imgE1,
    title: "1.Main page - Login.",
    description: `After the application opens, it will take you to login page.
    At the first two buttons you choose the language that you want to use (Albanian, English). At the two input boxes you write your email and password, then you press Login to enter the application.
    `,
  },
  {
    id: 2,
    image: imgE2,
    title: "2. Rooms window",
    description: `When you press “Add +” button at the top right corner, you will see a modal where you can write room information.
    `,
  },
  {
    id: 3,
    image: imgE3,
    title: "2. Rooms window",
    description: `If you click “Create” the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.
    At the search field you can search rooms based on room number.
    At the room list you can view hotel rooms.
    When you click three horizontal dots at any room, you will se room options: Book, Edit, and Delete
    `,
  },
  {
    id: 4,
    image: imgE4,
    title: "2. Rooms window",
    description: `When you click “Book”, you will se a modal where you can write booking information`,
  },
  {
    id: 5,
    image: imgE5,
    title: "2. Rooms window",
    description: `If you click “Create”, the data will be saved to the database and the modal will close, if you click “Close” the modal will be closed and the data will be lost
    If you click “Edit”, you will see a modal where you write new information about the room.
`,
  },
  {
    id: 6,
    image: imgE6,
    title: "2. Rooms window",
    description: `If you click “Save”, the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.
    When you press “Delete”, the room will be deleted.
    `,
  },

  {
    id: 7,
    image: imgE7,
    title: "3. Booked rooms window",
    description: `At the search field you can search booked rooms based on room number.
    At the room list you can view booked rooms.
    When you click three horizontal dots at any room, you will se room options: Cancel, and Edi    
    `,
  },
  {
    id: 8,
    image: imgE8,
    title: "3. Booked rooms window",
    description: `If you click “Cancel”, the system will cancel the reservation and change the status to “Canceled”.
    If you click “Edit”, you will see a modal where you write new information about the booked room.    
    `,
  },
  {
    id: 9,
    image: imgE9,
    title: "3. Booked rooms window",
    description: `If you click “Save”, the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.`,
  },
  {
    id: 10,
    image: imgE10,
    title: "4. Users window",
    description: `When you press “Add +” button at the top right corner, you will see a modal where you can write user information.`,
  },
  {
    id: 11,
    image: imgE11,
    title: "4. Users window",
    description: `If you click “Create”, the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.
    At the search field you can search booked rooms based on name, surname, email or username.
    At the room list you can view existing users.
    When you click three horizontal dots at any room, you will se room options: Edit, and Delete
    `,
  },
  {
    id: 12,
    image: imgE12,
    title: "4. Users window",
    description: `If you click “Edit”, you will see a modal where you write new information about the user`,
  },

  {
    id: 13,
    image: imgE13,
    title: "4. Users window",
    description: `
    If you click “Save”, the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.
    If you click “Remove”, the user will be removed.    
    `,
  },

  {
    id: 14,
    image: imgE14,
    title: "5. Category window",
    description: `When you press “Add +” button at the top right corner, you will see a modal where you can write category information.`,
  },
  {
    id: 15,
    image: imgE15,
    title: "5. Category window",
    description: `If you click “Create”, the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.
    At the search field you can search categories rooms based on category name.
    At the category list you can view existing categories.
    When you click three horizontal dots at any category, you will se category options: Edit, and Delete    
    `,
  },
  {
    id: 16,
    image: imgE16,
    title: "5. Category window",
    description: `If you click “Edit”, you will see a modal where you write new information about the category`,
  },
  {
    id: 17,
    image: imgE17,
    title: "5. Category window",
    description: `If you click “Save”, the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.
    If you click “Delete”, the category will be removed.`,
  },
  {
    id: 18,
    image: imgE18,
    title: "6. Status window",
    description: `When you press “Add +” button at the top right corner, you will see a modal where you can write status information `,
  },
  {
    id: 19,
    image: imgE19,
    title: "6. Status window",
    description: `If you click “Create”, the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.
    At the search field you can search statuses based on status name.
    At the status list you can view existing statuses.
    When you click three horizontal dots at any status, you will se status options: Edit, and Delete     
    `,
  },

  {
    id: 20,
    image: imgE20,
    title: "6. Status window",
    description: `If you click “Edit”, you will see a modal where you write new information about the status`,
  },
  {
    id: 21,
    image: imgE21,
    title: "6. Status window",
    description: `If you click “Save”, the data will be saved to the database and the modal closes. If you press “Close”, the modal will be closed and the data will be lost.
    If you click “Delete”, the status will be removed    
    `,
  },
  {
    id: 22,
    image: imgE22,
    title: "7. Language change and logout",
    description: `At the top left corner you can choose the language you want to use.
    At the top right corner, if you click at the user name you will see logout option.
        
    `,
  },
];

export const generalRule: Rule[] = [
  { required: true, message: "Field is required!" },
];

function ShowInfoModal(): ReactElement {
  const data =
    localStorage.getItem("language") == "en" ? helpInfoDataEn : helpInfoData;
  const [countIndex, setCountIndex] = useState(0);

  return (
    <Spin spinning={false}>
      <Row justify="end" style={{ marginTop: 10 }}>
        <p>
          {countIndex + 1} / {data.length}
        </p>
        <Col style={{ marginBottom: 10, marginTop: 0 }}>
          <h5>{data[countIndex].title}</h5>
          <img src={data[countIndex].image} width="600" height="230" />

          <p style={{ marginTop: 10 }}>{data[countIndex].description}</p>
        </Col>

        {countIndex > 0 && (
          <Button
            onClick={() => {
              if (countIndex > 0) {
                setCountIndex(countIndex - 1);
              }
            }}
            danger
          >
            {localStorage.getItem("language") == "sq" ? "Mbrapa" : "Previous"}
          </Button>
        )}
        {countIndex < helpInfoData.length - 1 && (
          <Button
            type="primary"
            ghost
            style={{ marginLeft: 10 }}
            htmlType="submit"
            onClick={() => {
              setCountIndex(countIndex + 1);
            }}
          >
            {localStorage.getItem("language") == "sq" ? "Vazhdo" : "Next"}
          </Button>
        )}
      </Row>
    </Spin>
  );
}

export default ShowInfoModal;

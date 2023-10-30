import style from "./DesicriptionBox.module.css";

const DesicriptionBox = () => {
  return (
    <div className={style.desicriptionBox}>
      <div className={style["desicriptionBox-navigator"]}>
        <div className={style["desicriptionBox-nav-box"]}>Desicription</div>
        <div className={style["desicriptionBox-nav-box fade"]}>
          Reviews(122)
        </div>
      </div>
      <div className={style["desicriptionBox-desicription"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        scelerisque sapien sed felis dignissim, vel lacinia urna pulvinar.
        Vivamus ullamcorper, dolor sit amet tristique fermentum, turpis justo
        tempor dolor, sit amet aliquam lorem velit sit amet purus. Integer ac
        commodo nulla. Sed luctus justo id ex vehicula, at fermentum lorem
        hendrerit. Sed et egestas elit, vel rhoncus risus. Sed tempor risus a
        justo posuere, eu eleifend ipsum suscipit. Curabitur efficitur auctor
        felis, vel tempor lacus. Nunc sollicitudin fringilla tellus, nec commodo
        ipsum mattis at. Aliquam ultricies ligula at tellus ullamcorper, non
        varius nunc iaculis. Curabitur iaculis et mi ac egestas. Integer sed
        justo vel dolor feugiat pellentesque. Sed accumsan velit nec massa
        congue, non euismod nisl bibendum.
      </div>
    </div>
  );
};

export default DesicriptionBox;

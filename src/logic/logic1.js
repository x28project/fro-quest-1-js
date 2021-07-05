window.logic1 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (!(cmd_isset(5))) {
          jumpTo(500);
          break;
        }
        cmd_load_pic(0);
        cmd_draw_pic(0);
        cmd_discard_pic(0);
        cmd_set_horizon(37);
        cmd_status_line_off();
        cmd_prevent_input();
        cmd_program_control();
        cmd_show_pic();
        cmd_set_text_attribute(15, 0);
        cmd_display(23, 8, "Whoa, that's a nice Fro!");
        cmd_display(24, 10, "(C)2015 X28 Project");
        cmd_assignn(10, 2);
        cmd_assignn(7, 64);
        cmd_load_sound(1);
        cmd_sound(1, 147);
      case 1:
        if (!(!cmd_have_key())) {
          jumpTo(501);
          break;
        }
        jumpTo(1);
        break;
      case 501:
      case 500:
        cmd_set(14);
        cmd_clear_lines(22, 24, 0);
        cmd_stop_motion(0);
        cmd_reset(33);
        //if (cmd_isset(254)) {
        if (false) {
          cmd_get_num("Room: ", 80);
          cmd_new_room_v(80);
          jumpTo(2);
          break;
        }
        cmd_call(18, [2700]);
        if (AGI.break_all_logics) return;
case 2700:
      case 2:
        return;

    }
  }
}
MESSAGES[1] = [
  "",
  "Whoa, that's a nice Fro!",
  "(C)2015 X28 Project",
  "Room: "
];
CONTROLS[1] = "?4?4?4?4?4?4?4?4>!F>.E>lh>.4>gs>,>Z@>{>UV9a>+>ULUV>^>PQZQ>^>PLlL>^>KQlQ>!>KLrQ>!>KLxL>!>KLxL>!>EQxQ>x>EL!Q>x>EL!QUA>K>EL!Q9V>K>EL!Q9V>K>EL^L9V9A>4>EL^LKL9V<.^<.UFxL^LKL9V<.^<.KVrL^LKLEQ<.^<.EarL!QKLKL<.^<.9hrL!QKLKL<.^<.9mlL!QKLPF<.^<.4L9QlQxLPLPFUL<.K<.4FEQlQxLPLPFPV<.E<^5ELEQlQxLPLPFPa<.9<!AEFPLlQrQPLPFKh<.9<E5lAEFPLrQlQPLPFKL9L<.4<9AgF9LPLrQlLULPFKLEF<.4<9AU59F9LPLrVZQULPFKLEF<.4<4FU59F9LPLxVPQZLPFKLKF<,.,LPA9F9LPLx}ZLPFKLKF<,.,LPV9LPL!*gLKLKQEF<,.{QKa9LPL^ylQELKV9F<,.+F9AKQ959LPF{mxsKsKF<r.+F9AEQPLPF.4Q^sKsEQ<l.^FE5EVPLKL,a!sKy9Q<l.^FUVPLKL{sxQ9LEL9V9V<g.!FZQULKF,@E5gAELELEQ9a<Z.xLK5E59FULEL{.0!QEFPF9F9F<Z.xLEAPFUm,APs+FELPA9FEAP5<9.rQEAPFUm,5ga,AELgFEFKF.,.rQEAPFUh.xL.ULZLEAKF.,.lVEAPFUa.+5.ZLZLEAKF.,.lVEAPFZQ<.UQZL9AKF.,.l59L9FPFgA<.laKL9AKF.,.xL9FPF>EVKaKF.,.xhPF>EVE59VEL.,.xhPF95>9QEaKL.,.xhPQ>KFEA9LKL.,.xQ9APQ>lA9QEL.,.xLE5UQ>lAELKF.,.xLlL>rAKFKF.,.xLlF>xFEFKL.{.xLgF>!FEFKL.{.xLZF>+FEFEQ.+.xLZA>{hEQ.+.xLZA>,aEV.^.xLZ5>.9VEF95.+.xL>.lQKF95.+.xL>.rLKF.,.xL<E5<.gFKF.,.xL95<E5x5<.4F.,.xL95<K5<.xF.,.xV<E5K5U5E5<{F.,.xV.^AK595g595E5<+F.,.xQ.!59L9AEQE5K5PA<gF.,.xL.^A9aEAKAEFE5E5<ZF.,.xL.!.*K5<PF.,.xF.l59.}KF<EF.,.xF.r<5E5K5<9F.{.xA.lA9<LK5<4F.{.rF.l59<V95<9F.{.rA.l<sP5.{F.+.lA.g5959<@9595.!L.^.lA.Z5E<=P5.!A.+.l5.ZA9<.59A95<.l<{59<.a95<.g<.9<.QE5<.g<{5E<.QE5<.g<^<.s9F95<.P<^5E<.@<.U<x>5<.U<!>0<.U<x>595<.K<r>5E5<.K<l>F<.U<r>F95<.E<g59>L<.K<g59>L95<.9<l>Q95<.9<l>V<.E<g>a9A<,<l>m<,<g>s<,<Z>y<,<Z>y<,<Z>@<{<U>@<,<P>@<.4<P>*<,<P>*<,<U>@<,<U>y<.4<P>*<,<U>y<.4<K>=<,<E59>@<.4<K59>*<{<K59>=<+<K>=<,<K>}<{<K>}<{<K>}<{<E>}<,<959>=<,<9>.0<,<9>.A<+<9>.0<,<E>=E5<+<E>=95<{<E>.0<{<K>=<,<9>.5<{<K>=<,<P>*<,<9>}<.4<959>=<,<K>*<.4<K>*<.4<K59>s<.9<U>s<.9<K>y<.E<P>y<.9<K>s<.K<P>a95<.K<K>h<.U<P>Q95<.U<P>Q95<.U<P>5E5<.l<K>A95<.r<P<.=<.{<P<.@95<.{<P<.y>9<Z<.h>E<Z<.aK5<.,<U<.h>K<U<}9F9F>P<P59<m9VE5>g<P5E<aE595>+<Z<h9595>{<Z<F9595>.K<P<h95>.E<Z<F9A.P5<.,<g<595.ZA<.{<g<09A.PL<.{<g<095.KV<.{<g.}.Pa<.,<l.=.Em<.,";
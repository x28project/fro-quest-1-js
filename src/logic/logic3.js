window.logic3 = function () {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (!cmd_isset(5)) {
          jumpTo(500);
          break logicSwitch;
        }
        cmd_load_pic(0);
        cmd_draw_pic(0);
        cmd_discard_pic(0);
        cmd_set_horizon(0);
        cmd_status_line_on();
        cmd_accept_input();
        cmd_position(0, 0, 0);
        if (!cmd_equaln(1, 2)) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_load_view(30);
        cmd_set_view(1, 30);
        cmd_position(1, 62, 44);
        cmd_set_loop(1, 0);
        cmd_set_cel(1, 0);
        cmd_ignore_blocks(1);
        cmd_ignore_objs(1);
        cmd_draw(1);
        cmd_stop_cycling(1);
        cmd_assignn(42, 0);
        cmd_load_sound(30);
        cmd_sound(30, 147);
        jumpTo(3);
        break logicSwitch;
      case 501:
        if (!!cmd_equaln(1, 2)) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_animate_obj(33);
        cmd_load_view(32);
        cmd_set_view(33, 32);
        if (!(cmd_isset(164) && !cmd_isset(160))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_position(33, 62, 44);
        cmd_set_loop(33, 1);
        cmd_set_cel(33, 0);
        cmd_ignore_blocks(33);
        cmd_ignore_objs(33);
        cmd_stop_cycling(33);
        cmd_draw(33);
        jumpTo(1);
        break logicSwitch;
      case 503:
        cmd_position(33, 62, 128);
        cmd_set_loop(33, 0);
        cmd_set_cel(33, 0);
        cmd_set_priority(33, 8);
        cmd_ignore_blocks(33);
        cmd_ignore_objs(33);
        cmd_stop_cycling(33);
        cmd_draw(33);
      case 1:
        cmd_assignn(80, 0);
        if (!cmd_lessn(33, 128)) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_assignn(33, 128);
        jumpTo(2);
        break logicSwitch;
      case 504:
        if (!cmd_greatern(33, 150)) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(33, 150);
      case 505:
      case 2:
        cmd_position_v(0, 80, 33);
        cmd_draw(0);
        cmd_load_sound(31);
        cmd_sound(31, 147);
        cmd_set(42);
      case 502:
      case 3:
        cmd_show_pic();
      case 500:
        if (cmd_equaln(1, 2) && !cmd_isset(40)) {
          if (cmd_lessn(42, 42)) {
            cmd_increment(42);
            jumpTo(4);
            break logicSwitch;
          }
          if (!cmd_isset(40)) {
            cmd_set(40);
            cmd_end_of_loop(1, 70);
          }
        }
      case 4:
        if (cmd_isset(41) && cmd_isset(147)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(5);
            break logicSwitch;
          }
          cmd_reset(41);
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_load_sound(31);
          cmd_sound(31, 147);
          cmd_set(42);
        }
      case 5:
        if (cmd_isset(42) && cmd_isset(147)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(6);
            break logicSwitch;
          }
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_sound(31, 147);
        }
      case 6:
        if (cmd_said(15)) {
          cmd_print(m1);
          jumptoLineArray = [2800];
          jumpTo(2800, 3);
          break logic;
        }
      case 2800:
        if (cmd_said(15, 47)) {
          cmd_print(m2);
          jumptoLineArray = [2801];
          jumpTo(2801, 3);
          break logic;
        }
      case 2801:
        if (cmd_said(15, 48)) {
          cmd_print(m3);
          jumptoLineArray = [2802];
          jumpTo(2802, 3);
          break logic;
        }
      case 2802:
        if (cmd_said(15, 43)) {
          cmd_print(m4);
          jumptoLineArray = [2803];
          jumpTo(2803, 3);
          break logic;
        }
      case 2803:
        if (cmd_said(15, 33)) {
          cmd_print(m5);
          jumptoLineArray = [2804];
          jumpTo(2804, 3);
          break logic;
        }
      case 2804:
        if (cmd_said(15, 31)) {
          cmd_print(m6);
          jumptoLineArray = [2805];
          jumpTo(2805, 3);
          break logic;
        }
      case 2805:
        if (cmd_isset(70)) {
          cmd_reset(70);
          cmd_move_obj(1, 62, 130, 4, 71);
        }
        if (cmd_isset(71)) {
          cmd_reset(71);
          cmd_set(41);
          cmd_assignn(42, 0);
          cmd_load_sound(100);
          cmd_sound(100, 147);
          cmd_shake_screen(1);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_stop_cycling(1);
          cmd_end_of_loop(1, 72);
        }
        if (cmd_isset(72)) {
          cmd_reset(72);
          cmd_animate_obj(33);
          cmd_load_view(32);
          cmd_set_view(33, 32);
          cmd_ignore_blocks(33);
          cmd_ignore_objs(33);
          cmd_position(33, 62, 128);
          cmd_set_priority(33, 8);
          cmd_stop_cycling(33);
          cmd_draw(33);
          cmd_position(0, 63, 123);
          cmd_ignore_objs(0);
          cmd_set_loop(0, 0);
          cmd_set_cel(0, 0);
          cmd_assignn(6, 0);
          cmd_draw(0);
          cmd_erase(1);
        }
        if (!cmd_said(49, 48)) {
          jumpTo(506);
          break logicSwitch;
        }
        if (!cmd_center_posn(0, 62, 122, 71, 126)) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_get_posn(33, 82, 83);
        if (!(cmd_equaln(82, 62) && cmd_equaln(83, 44))) {
          jumpTo(508);
          break logicSwitch;
        }
        cmd_load_view(31);
        cmd_set_view(1, 31);
        cmd_set_loop(1, 2);
        cmd_set_cel(1, 0);
        cmd_ignore_blocks(1);
        cmd_position(1, 63, 129);
        cmd_stop_cycling(1);
        cmd_draw(1);
        cmd_erase(0);
        cmd_end_of_loop(1, 63);
        jumpTo(7);
        break logicSwitch;
      case 508:
        cmd_load_view(31);
        cmd_set_view(1, 31);
        cmd_set_loop(1, 0);
        cmd_set_cel(1, 0);
        cmd_get_posn(33, 82, 83);
        cmd_position_v(1, 82, 83);
        cmd_ignore_blocks(1);
        cmd_stop_cycling(1);
        cmd_draw(1);
        cmd_erase(0);
        cmd_erase(33);
        cmd_end_of_loop(1, 73);
        if (!!cmd_isset(163)) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_set(163);
        cmd_increment(3);
      case 509:
      case 7:
        jumpTo(8);
        break logicSwitch;
      case 507:
        cmd_print(m7);
        jumptoLineArray = [2806];
        jumpTo(2806, 3);
        break logic;
      case 2806:
      case 506:
      case 8:
        if (cmd_isset(63)) {
          cmd_reset(63);
          cmd_draw(0);
          cmd_erase(1);
          cmd_program_control();
          cmd_prevent_input();
          cmd_ignore_blocks(33);
          cmd_ignore_objs(33);
          cmd_move_obj(0, 64, 127, 1, 64);
          cmd_move_obj(33, 62, 92, 4, 65);
        }
        if (cmd_isset(73)) {
          cmd_reset(73);
          cmd_assignn(79, 8);
          cmd_move_obj(1, 62, 44, 4, 74);
        }
        if (cmd_isset(74)) {
          cmd_reset(74);
          cmd_assignn(79, 0);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_stop_cycling(1);
          cmd_end_of_loop(1, 75);
          cmd_new_room(2);
          if (AGI.break_all_logics) return;
        }
        if (cmd_isset(64)) {
          cmd_reset(64);
          cmd_load_view(12);
          cmd_set_view(1, 12);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_normal_cycle(1);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_subn(30, 13);
          cmd_addn(31, 8);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_subn(84, 3);
          cmd_set_priority_v(1, 84);
          cmd_erase(0);
          cmd_draw(1);
          cmd_stop_cycling(1);
          cmd_end_of_loop(1, 100);
        }
        if (cmd_isset(65)) {
          cmd_reset(65);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 66);
          cmd_move_obj(33, 62, 128, 1, 82);
        }
        if (cmd_isset(66)) {
          cmd_reset(66);
          cmd_set_loop(1, 2);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 67);
        }
        if (cmd_isset(0) && !cmd_isset(62)) {
          cmd_set(62);
          cmd_set(60);
        }
        if (cmd_isset(60)) {
          cmd_reset(60);
          cmd_program_control();
          cmd_prevent_input();
          cmd_load_view(4);
          cmd_set_view(1, 4);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_decrement(30);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_set_priority_v(1, 84);
          cmd_normal_cycle(1);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_erase(0);
          cmd_draw(1);
          cmd_stop_cycling(1);
          cmd_assignn(91, 4);
          cmd_cycle_time(1, 91);
          cmd_end_of_loop(1, 61);
        }
      case 2807:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(61) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(61);
              cmd_set_loop(1, 1);
              cmd_set_cel(1, 0);
              cmd_erase(1);
              cmd_print(m8);
              jumptoLineArray = [2807, 28000];
              ifSkipArray = [true];
              jumpTo(2807, 3);
              break logic;
            case 28000:
              cmd_position(0, 88, 134);
              cmd_reset(62);
              cmd_assignn(35, 1);
              if (!cmd_isset(161)) {
                cmd_set(161);
                cmd_increment(3);
              }
          }
        }
      case 2808:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(50, 33) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (!cmd_has(i2) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_get(i2);
                    cmd_show_obj(221);
                    jumptoLineArray = [2808, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2808, 3);
                    break logic;
                  case 280000:
                    if (!cmd_isset(159)) {
                      cmd_set(159);
                      cmd_increment(3);
                    }
                    jumpTo(9);
                    break logicSwitch;
                }
              }
              cmd_print(m9);
              jumptoLineArray = [2809];
              jumpTo(2809, 3);
              break logic;
          }
        }
      case 2809:
      case 9:
        if (!cmd_said(51, 33, 48)) {
          jumpTo(510);
          break logicSwitch;
        }
        if (!cmd_has(i2)) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_get_posn(33, 82, 83);
        if (!(cmd_equaln(82, 62) && cmd_equaln(83, 44))) {
          jumpTo(512);
          break logicSwitch;
        }
        if (!cmd_posn(0, 42, 112, 92, 162)) {
          jumpTo(513);
          break logicSwitch;
        }
        cmd_drop(i2);
        cmd_program_control();
        cmd_prevent_input();
        cmd_print(m10);
        jumptoLineArray = [2810];
        jumpTo(2810, 3);
        break logic;
      case 2810:
        cmd_load_view(11);
        cmd_set_view(1, 11);
        cmd_set_loop(1, 0);
        cmd_set_cel(1, 0);
        cmd_subn(30, 4);
        cmd_position_v(1, 30, 31);
        cmd_get_priority(0, 84);
        cmd_increment(84);
        cmd_set_priority_v(1, 84);
        cmd_normal_cycle(1);
        cmd_ignore_blocks(1);
        cmd_ignore_objs(1);
        cmd_erase(0);
        cmd_draw(1);
        cmd_end_of_loop(1, 76);
        jumpTo(10);
        break logicSwitch;
      case 513:
        cmd_print(m11);
        jumptoLineArray = [2811];
        jumpTo(2811, 3);
        break logic;
      case 2811:
      case 10:
        jumpTo(11);
        break logicSwitch;
      case 512:
        cmd_print(m12);
        jumptoLineArray = [2812];
        jumpTo(2812, 3);
        break logic;
      case 2812:
      case 11:
        jumpTo(12);
        break logicSwitch;
      case 511:
        cmd_print(m13);
        jumptoLineArray = [2813];
        jumpTo(2813, 3);
        break logic;
      case 2813:
      case 12:
        jumpTo(13);
        break logicSwitch;
      case 510:
      case 2814:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(51, 33) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_has(i2) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m14);
                    jumptoLineArray = [2814, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2814, 3);
                    break logic;
                  case 280000:
                    jumpTo(13);
                    break logicSwitch;
                }
              }
              cmd_print(m13);
              jumptoLineArray = [2815];
              jumpTo(2815, 3);
              break logic;
          }
        }
      case 2815:
      case 13:
        if (cmd_isset(76)) {
          cmd_reset(76);
          cmd_get_posn(1, 82, 83);
          cmd_addn(82, 4);
          cmd_subn(83, 24);
          cmd_assignn(102, 71);
          cmd_assignn(103, 21);
          cmd_animate_obj(34);
          cmd_load_view(34);
          cmd_set_view(34, 34);
          cmd_position_v(34, 82, 83);
          cmd_ignore_blocks(34);
          cmd_ignore_objs(34);
          cmd_set_priority(34, 15);
          cmd_draw(34);
          cmd_stop_cycling(34);
          cmd_set(77);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 100);
        }
        if (!cmd_isset(78)) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_get_posn(34, 100, 101);
        cmd_assignv(105, 101);
        //105 /= 103;
        cmd_divv(105, 103);
        if (!cmd_greaterv(101, 103)) {
          jumpTo(515);
          break logicSwitch;
        }
        if (!cmd_greaterv(100, 102)) {
          jumpTo(516);
          break logicSwitch;
        }
        cmd_assignv(104, 100);
        //104 /= 102;
        cmd_divv(104, 102);
        cmd_subv(100, 104);
        jumpTo(14);
        break logicSwitch;
      case 516:
        if (!cmd_lessv(100, 102)) {
          jumpTo(517);
          break logicSwitch;
        }
        cmd_assignv(104, 102);
        //104 /= 100;
        cmd_divv(104, 100);
        cmd_addv(100, 104);
      case 517:
      case 14:
        if (!cmd_greaterv(83, 103)) {
          jumpTo(518);
          break logicSwitch;
        }
        cmd_subv(101, 105);
      case 518:
        cmd_reposition_to_v(34, 100, 101);
        jumpTo(15);
        break logicSwitch;
      case 515:
        cmd_reset(78);
        cmd_assignn(92, 1);
        cmd_move_obj_v(34, 102, 103, 92, 79);
      case 514:
      case 15:
        if (cmd_isset(77)) {
          cmd_reset(77);
          cmd_set(78);
        }
        if (!cmd_isset(79)) {
          jumpTo(519);
          break logicSwitch;
        }
        cmd_reset(79);
        if (!cmd_center_posn(1, 62, 122, 71, 126)) {
          jumpTo(520);
          break logicSwitch;
        }
        cmd_erase(1);
        cmd_draw(0);
        cmd_ignore_blocks(33);
        cmd_ignore_objs(33);
        cmd_move_obj(0, 64, 127, 1, 64);
        cmd_move_obj(33, 62, 92, 4, 65);
        jumpTo(16);
        break logicSwitch;
      case 520:
        cmd_move_obj(33, 62, 128, 4, 82);
      case 16:
        cmd_move_obj(34, 80, 130, 8, 80);
      case 519:
        if (cmd_isset(80)) {
          cmd_reset(80);
          cmd_erase(34);
        }
        if (cmd_isset(82)) {
          cmd_reset(82);
          cmd_reset(42);
          cmd_set(41);
          cmd_assignn(42, 0);
          cmd_load_sound(100);
          cmd_sound(100, 147);
          cmd_shake_screen(1);
          cmd_end_of_loop(33, 83);
        }
      case 2816:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(83) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(83);
              cmd_load_view(32);
              cmd_set_view(33, 32);
              cmd_set_loop(33, 0);
              cmd_set_cel(33, 0);
              cmd_ignore_blocks(33);
              cmd_ignore_objs(33);
              cmd_position(33, 62, 128);
              cmd_set_priority(33, 8);
              cmd_stop_cycling(33);
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(67) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_reset(67);
                    cmd_set_priority(1, 8);
                    cmd_print(m15);
                    jumptoLineArray = [2816, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2816, 3);
                    break logic;
                  case 280000:
                    cmd_set_loop(33, 1);
                    cmd_set_cel(33, 4);
                    cmd_reverse_loop(33, 68);
                    jumpTo(17);
                    break logicSwitch;
                }
              }
              cmd_erase(1);
              cmd_draw(0);
              if (!cmd_isset(160)) {
                cmd_set(160);
                cmd_increment(3);
              }
              cmd_player_control();
              cmd_accept_input();
          }
        }
      case 17:
        if (cmd_isset(68)) {
          cmd_reset(68);
          cmd_move_obj(33, 62, 44, 4, 69);
        }
        if (cmd_isset(69)) {
          cmd_reset(69);
          cmd_assignn(35, 1);
          if (!cmd_isset(162)) {
            cmd_set(162);
            cmd_increment(3);
          }
        }
        if (cmd_equaln(2, 4)) {
          cmd_new_room(4);
          if (AGI.break_all_logics) return;
        }
        return;
    }
  }
};
MESSAGES[3] = [
  '',
  "This well is dry... Maybe not completely. Only a small pool of water remains. Large and small rocks litter the floor. And last but not least, there is a nice elevator that you had installed.\n\nWhy did you install an elevator? You really thought you'd have a reason to use this well?",
  'Whenever you are down, the elevator lifts you up. Should you thank the elevator or the buttons?',
  'There are two buttons. A button near the top moves the elevator down. A button near the bottom moves the elevator up.',
  'Is this the first time you have seen water?',
  'Like a rock. You see some good throwing rocks scattered about.',
  "Don't worry, these walls are not closing in on you.",
  "You're not close enough.",
  'That was precisely the reason you drained the well and signed up for public water and sewer.',
  'How many rocks do you need?',
  'You wind up with that world-class pitching arm...',
  "To throw the rock at the button, shouldn't you be under the button.",
  "You don't have a reason to throw the rock.",
  "You don't have a rock.",
  'Throw the rock at what?',
  'You should have seen that one coming...',
];
CONTROLS[3] =
  '?4?4?4?4?4?4?4?4?4?4?4>r5>.Z>r5>.Z>r5>.Z?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4>lF>.U>lF>.U>lF>.U>lF>.U>lF>.U>lF>.U>lF>.U?4?4?4?4?4?4?4?4?4?4?4?4?4>lb>.9>gBZ5>.4<.,i96g5<4.5.{<.,tlA.xLg5rV.l<.{zx5.UQr5.4A.Z<4h.U#!F{LU5l5.E5.U.ZslV{GEREB+VPLx5Z5.PA.K^s.lQrRU69B.KL,5EF.g5.E4@<gAPM96lG<gA.x5.E<.ULKBx696>E5.E<.^BxG>K5.9<.^BxG>K5.9<.^B!B>K5.9<.+6!6>P5.9><^O.{5.9><!q.x5.9><x%.r5.4><r-.r5.4><g.3.l5.4><Z.8.l5.4><Z.8.g5.9><U.D.g5.9<.9F<.9.D.Z5.E<,AK5<.4.J.U5.E<{5U5<.9.D.U5.E<+5g5<.4.J.P5.E<+5g5<.9.D.P5.E<+5l5<.9.D.K5.E<^5r5<.9.D.K5.E<^Al5<.E.3.P5.E<{AKF<.P;.P5.E<.4F<.lOUO.U5.E><^8l8.g5.E/+A.9/KAlA.9><9F.+AE5g595.4>.,AKA.x5U5U5E5.4>.{5gF.UAgAK5E5.4<9F<.lA!A.E5!5E5K5,.,AKA<9A.E5,A{A+FK5,.+AgA.+AEQ!A.EFx5<U.^5!A.rArLZ5.gAZA<Z.xA{A.PF,AEA.xV<l.lA.EA{L.PA>x.PL.ZLZL><P{V.{V><l4@E5/.9^A/.E?4?4?4?4?4';

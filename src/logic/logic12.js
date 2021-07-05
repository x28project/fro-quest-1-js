window.logic12 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (cmd_isset(5)) {
          cmd_load_pic(0);
          cmd_draw_pic(0);
          cmd_discard_pic(0);
          cmd_set_horizon(0);
          cmd_status_line_on();
          cmd_accept_input();
          cmd_load_view(120);
          cmd_animate_obj(120);
          cmd_set_view(120, 120);
          cmd_set_loop(120, 0);
          cmd_set_cel(120, 0);
          cmd_stop_cycling(120);
          cmd_ignore_objs(120);
          cmd_position(120, 110, 30);
          cmd_draw(120);
          cmd_load_view(121);
          cmd_animate_obj(121);
          cmd_set_view(121, 121);
          cmd_set_loop(121, 0);
          cmd_set_cel(121, 0);
          cmd_stop_cycling(121);
          cmd_ignore_objs(121);
          cmd_position(121, 20, 40);
          cmd_draw(121);
          cmd_load_view(122);
          cmd_animate_obj(122);
          cmd_set_view(122, 122);
          cmd_set_loop(122, 0);
          cmd_set_cel(122, 0);
          cmd_stop_cycling(122);
          cmd_ignore_objs(122);
          cmd_position(122, 14, 105);
          cmd_draw(122);
          cmd_animate_obj(123);
          cmd_set_view(123, 122);
          cmd_set_loop(123, 1);
          cmd_set_cel(123, 0);
          cmd_stop_cycling(123);
          cmd_ignore_objs(123);
          cmd_position(123, 40, 140);
          cmd_draw(123);
          cmd_animate_obj(124);
          cmd_set_view(124, 122);
          cmd_set_loop(124, 2);
          cmd_set_cel(124, 0);
          cmd_stop_cycling(124);
          cmd_ignore_objs(124);
          cmd_position(124, 130, 126);
          cmd_draw(124);
          cmd_load_view(123);
          cmd_animate_obj(125);
          cmd_set_view(125, 123);
          cmd_set_loop(125, 1);
          cmd_fix_loop(125);
          cmd_set_priority(125, 15);
          cmd_ignore_objs(125);
          cmd_load_view(92);
          cmd_animate_obj(1);
          cmd_set_view(1, 92);
          cmd_set_loop(1, 2);
          cmd_set_cel(1, 0);
          cmd_normal_cycle(1);
          cmd_position(1, 72, 167);
          cmd_ignore_objs(1);
          cmd_draw(1);
          cmd_move_obj(1, 72, 103, 1, 70);
          cmd_load_sound(12);
          cmd_sound(12, 147);
          cmd_show_pic();
        }
case 2800:
ifSkip = ifSkipArrayShift();
        if ((cmd_said(46, 109)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          cmd_print(m1);
jumptoLineArray = [2800, 28000];
ifSkipArray = [true];
jumpTo(2800, 12);
break logic;
case 28000:
          return;
}
        }
        if (cmd_isset(70)) {
          cmd_reset(70);
          cmd_move_obj(1, 72, 102, 1, 100);
          cmd_move_obj(120, 110, 167, 1, 71);
          cmd_move_obj(121, 20, 167, 1, 72);
          cmd_move_obj(122, 14, 167, 1, 73);
          cmd_move_obj(123, 40, 167, 1, 74);
          cmd_move_obj(124, 130, 167, 1, 75);
          cmd_set(81);
        }
        if (cmd_isset(71)) {
          cmd_reset(71);
          cmd_current_cel(120, 87);
          if (cmd_lessn(87, 17)) {
            if (cmd_equaln(87, 0)) {
              cmd_start_cycling(120);
            }
            cmd_get_posn(120, 82, 83);
            cmd_assignn(92, 1);
            cmd_move_obj_v(120, 82, 83, 92, 71);
            jumpTo(1);
            break logicSwitch;
          }
          cmd_stop_cycling(120);
          cmd_set(76);
        }
      case 1:
        if (cmd_isset(72)) {
          cmd_reset(72);
          cmd_current_cel(121, 87);
          if (cmd_lessn(87, 12)) {
            if (cmd_equaln(87, 0)) {
              cmd_start_cycling(121);
            }
            cmd_get_posn(121, 82, 83);
            cmd_assignn(92, 1);
            cmd_move_obj_v(121, 82, 83, 92, 72);
            jumpTo(2);
            break logicSwitch;
          }
          cmd_stop_cycling(121);
          cmd_set(77);
        }
      case 2:
        if (cmd_isset(73)) {
          cmd_reset(73);
          cmd_current_cel(122, 87);
          if (cmd_lessn(87, 18)) {
            if (cmd_equaln(87, 0)) {
              cmd_start_cycling(122);
            }
            cmd_get_posn(122, 82, 83);
            cmd_assignn(92, 1);
            cmd_move_obj_v(122, 82, 83, 92, 73);
            jumpTo(3);
            break logicSwitch;
          }
          cmd_stop_cycling(122);
          cmd_set(78);
        }
      case 3:
        if (cmd_isset(74)) {
          cmd_reset(74);
          cmd_current_cel(123, 87);
          if (cmd_lessn(87, 13)) {
            if (cmd_equaln(87, 0)) {
              cmd_start_cycling(123);
            }
            cmd_get_posn(123, 82, 83);
            cmd_assignn(92, 1);
            cmd_move_obj_v(123, 82, 83, 92, 74);
            jumpTo(4);
            break logicSwitch;
          }
          cmd_stop_cycling(123);
          cmd_set(79);
        }
      case 4:
        if (cmd_isset(75)) {
          cmd_reset(75);
          cmd_current_cel(124, 87);
          if (cmd_lessn(87, 17)) {
            if (cmd_equaln(87, 0)) {
              cmd_start_cycling(124);
            }
            cmd_get_posn(124, 82, 83);
            cmd_assignn(92, 1);
            cmd_move_obj_v(124, 82, 83, 92, 75);
            jumpTo(5);
            break logicSwitch;
          }
          cmd_stop_cycling(124);
          cmd_set(80);
        }
      case 5:
        if (cmd_isset(76) && cmd_isset(77) && cmd_isset(78) && cmd_isset(79) && cmd_isset(80)) {
          cmd_reset(76);
          cmd_reset(77);
          cmd_reset(78);
          cmd_reset(79);
          cmd_reset(80);
        }
        if (!(cmd_isset(81))) {
          jumpTo(500);
          break logicSwitch;
        }
        cmd_reset(81);
        cmd_current_loop(125, 86);
        cmd_set_cel(125, 0);
        cmd_normal_cycle(125);
        if (!(!cmd_isset(86))) {
          jumpTo(501);
          break logicSwitch;
        }
        if (!(cmd_equaln(86, 0))) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_position(125, 159, 26);
        cmd_draw(125);
        cmd_move_obj(125, 147, 26, 1, 83);
        jumpTo(6);
        break logicSwitch;
      case 502:
        cmd_position(125, 0, 21);
        cmd_draw(125);
      case 6:
        jumpTo(7);
        break logicSwitch;
      case 501:
        if (!(cmd_equaln(86, 0))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_position(125, 159, 15);
        cmd_draw(125);
        cmd_move_obj(125, 147, 15, 1, 83);
        jumpTo(7);
        break logicSwitch;
      case 503:
        cmd_position(125, 0, 9);
        cmd_draw(125);
      case 7:
        cmd_set(82);
      case 500:
        if (!(cmd_isset(82))) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_current_loop(125, 86);
        if (!(!cmd_isset(86))) {
          jumpTo(505);
          break logicSwitch;
        }
        if (!(cmd_equaln(86, 0))) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_current_cel(125, 87);
        if (!(cmd_equaln(87, 11))) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_stop_cycling(125);
        cmd_reset(82);
        cmd_move_obj(125, 83, 91, 4, 83);
      case 507:
        jumpTo(8);
        break logicSwitch;
      case 506:
        cmd_current_cel(125, 87);
        if (!(cmd_equaln(87, 11))) {
          jumpTo(508);
          break logicSwitch;
        }
        cmd_stop_cycling(125);
        cmd_reset(82);
        cmd_move_obj(125, 69, 91, 4, 83);
      case 508:
      case 8:
        jumpTo(9);
        break logicSwitch;
      case 505:
        if (!(cmd_equaln(86, 0))) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_current_cel(125, 87);
        if (!(cmd_equaln(87, 11))) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_stop_cycling(125);
        cmd_reset(82);
        cmd_move_obj(125, 84, 80, 4, 83);
      case 510:
        jumpTo(9);
        break logicSwitch;
      case 509:
        cmd_current_cel(125, 87);
        if (!(cmd_equaln(87, 11))) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_stop_cycling(125);
        cmd_reset(82);
        cmd_move_obj(125, 69, 80, 4, 83);
      case 511:
      case 504:
      case 9:
        if (!(cmd_isset(83))) {
          jumpTo(512);
          break logicSwitch;
        }
        cmd_reset(83);
        cmd_current_loop(125, 86);
        if (!(!cmd_isset(86))) {
          jumpTo(513);
          break logicSwitch;
        }
        if (!(cmd_equaln(86, 0))) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_move_obj(125, 83, 91, 1, 84);
        jumpTo(10);
        break logicSwitch;
      case 514:
        cmd_move_obj(125, 70, 91, 1, 84);
      case 10:
        jumpTo(11);
        break logicSwitch;
      case 513:
        if (!(cmd_equaln(86, 0))) {
          jumpTo(515);
          break logicSwitch;
        }
        cmd_move_obj(125, 84, 80, 1, 84);
        jumpTo(11);
        break logicSwitch;
      case 515:
        cmd_move_obj(125, 69, 80, 1, 84);
      case 512:
      case 11:
        if (!(cmd_isset(84))) {
          jumpTo(516);
          break logicSwitch;
        }
        cmd_reset(84);
        cmd_current_loop(125, 86);
        if (!(!cmd_isset(86))) {
          jumpTo(517);
          break logicSwitch;
        }
        if (!(cmd_equaln(86, 0))) {
          jumpTo(518);
          break logicSwitch;
        }
        cmd_set_loop(1, 4);
        cmd_animate_obj(129);
        cmd_set_view(129, 92);
        cmd_set_loop(129, 12);
        cmd_set_cel(129, 0);
        cmd_position(129, 82, 99);
        cmd_ignore_objs(129);
        cmd_stop_cycling(129);
        cmd_draw(129);
        cmd_move_obj(129, 82, 167, 4, 94);
        cmd_load_view(124);
        cmd_animate_obj(131);
        cmd_set_view(131, 124);
        cmd_set_loop(131, 1);
        cmd_set_cel(131, 1);
        cmd_set_priority(131, 15);
        cmd_ignore_objs(131);
        cmd_position(131, 34, 167);
        cmd_draw(131);
        cmd_end_of_loop(131, 100);
        jumpTo(12);
        break logicSwitch;
      case 518:
        cmd_set_loop(1, 3);
        cmd_animate_obj(128);
        cmd_set_view(128, 92);
        cmd_set_loop(128, 13);
        cmd_set_cel(128, 0);
        cmd_position(128, 78, 99);
        cmd_ignore_objs(128);
        cmd_stop_cycling(128);
        cmd_draw(128);
        cmd_move_obj(128, 78, 167, 4, 93);
        cmd_load_view(124);
        cmd_animate_obj(130);
        cmd_set_view(130, 124);
        cmd_set_loop(130, 0);
        cmd_set_cel(130, 1);
        cmd_set_priority(130, 15);
        cmd_ignore_objs(130);
        cmd_position(130, 30, 167);
        cmd_draw(130);
        cmd_end_of_loop(130, 100);
      case 12:
        jumpTo(13);
        break logicSwitch;
      case 517:
        if (!(cmd_equaln(86, 0))) {
          jumpTo(519);
          break logicSwitch;
        }
        cmd_animate_obj(126);
        cmd_set_view(126, 92);
        cmd_set_loop(126, 7);
        cmd_set_cel(126, 0);
        cmd_get_posn(1, 30, 31);
        cmd_position_v(126, 30, 31);
        cmd_set_priority(126, 15);
        cmd_ignore_objs(126);
        cmd_draw(126);
        cmd_set_loop(1, 6);
        cmd_subn(31, 11);
        cmd_position_v(1, 30, 31);
        cmd_get_posn(1, 30, 31);
        cmd_assignn(31, 167);
        cmd_assignn(92, 4);
        cmd_move_obj_v(1, 30, 31, 92, 88);
        cmd_load_view(124);
        cmd_animate_obj(133);
        cmd_set_view(133, 124);
        cmd_set_loop(133, 1);
        cmd_set_cel(133, 1);
        cmd_set_priority(133, 15);
        cmd_ignore_objs(133);
        cmd_position(133, 35, 156);
        cmd_draw(133);
        cmd_end_of_loop(133, 100);
        jumpTo(13);
        break logicSwitch;
      case 519:
        cmd_set_loop(1, 5);
        cmd_animate_obj(127);
        cmd_set_view(127, 92);
        cmd_set_loop(127, 11);
        cmd_set_cel(127, 0);
        cmd_position(127, 77, 83);
        cmd_ignore_objs(127);
        cmd_stop_cycling(127);
        cmd_draw(127);
        cmd_move_obj(127, 77, 167, 4, 92);
        cmd_load_view(124);
        cmd_animate_obj(132);
        cmd_set_view(132, 124);
        cmd_set_loop(132, 0);
        cmd_set_cel(132, 1);
        cmd_set_priority(132, 15);
        cmd_ignore_objs(132);
        cmd_position(132, 29, 156);
        cmd_draw(132);
        cmd_end_of_loop(132, 100);
      case 13:
        if (!(cmd_equaln(86, 0))) {
          jumpTo(520);
          break logicSwitch;
        }
        cmd_move_obj(125, 0, 167, 4, 85);
        jumpTo(14);
        break logicSwitch;
      case 520:
        cmd_move_obj(125, 159, 167, 4, 85);
      case 516:
      case 14:
        if (!(cmd_isset(85))) {
          jumpTo(521);
          break logicSwitch;
        }
        cmd_reset(85);
        cmd_current_loop(125, 86);
        if (!(cmd_equaln(86, 0))) {
          jumpTo(522);
          break logicSwitch;
        }
        cmd_set_loop(125, 1);
        if (!(!cmd_isset(86))) {
          jumpTo(523);
          break logicSwitch;
        }
        cmd_set(86);
        jumpTo(15);
        break logicSwitch;
      case 523:
        cmd_set(87);
      case 15:
        jumpTo(16);
        break logicSwitch;
      case 522:
        cmd_set_loop(125, 0);
      case 16:
        cmd_erase(125);
        if (!(!cmd_isset(87))) {
          jumpTo(524);
          break logicSwitch;
        }
        cmd_set(81);
      case 524:
      case 521:
        if (cmd_isset(87)) {
          cmd_reset(87);
          cmd_set_loop(126, 8);
          cmd_set_cel(126, 0);
          cmd_assignn(91, 10);
          cmd_cycle_time(126, 91);
          cmd_end_of_loop(126, 89);
        }
        if (cmd_isset(93)) {
          cmd_reset(93);
          cmd_normal_cycle(128);
          cmd_end_of_loop(128, 100);
        }
        if (cmd_isset(94)) {
          cmd_reset(94);
          cmd_normal_cycle(129);
          cmd_end_of_loop(129, 100);
        }
        if (cmd_isset(92)) {
          cmd_reset(92);
          cmd_normal_cycle(127);
          cmd_end_of_loop(127, 100);
        }
        if (cmd_isset(88)) {
          cmd_reset(88);
          cmd_set_loop(1, 9);
          cmd_end_of_loop(1, 100);
        }
        if (cmd_isset(89)) {
          cmd_reset(89);
          cmd_get_posn(126, 30, 31);
          cmd_assignn(31, 167);
          cmd_assignn(92, 4);
          cmd_move_obj_v(126, 30, 31, 92, 90);
        }
        if (cmd_isset(90)) {
          cmd_reset(90);
          cmd_set_loop(126, 10);
          cmd_assignn(91, 1);
          cmd_cycle_time(126, 91);
          cmd_end_of_loop(126, 91);
        }
        if (cmd_isset(91)) {
          cmd_reset(91);
          cmd_new_room(8);
          if (AGI.break_all_logics) return;
        }
        return;

    }
  }
}
MESSAGES[12] = [
  "",
  "Everything is kinda up in the air right now..."
];
CONTROLS[12] = "";

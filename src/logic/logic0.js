window.logic0 = function () {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (cmd_greatern(17, 0)) {
          cmd_call(98, [2700]);
          if (AGI.break_all_logics) return;
        }
      case 2700:
        if (!cmd_equaln(0, 0)) {
          jumpTo(500);
          break logicSwitch;
        }
        cmd_call(91, [2701]);
        if (AGI.break_all_logics) return;
      case 2701:
        if (!cmd_isset(6)) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_disable_item(c20);
        cmd_set(14);
        cmd_reset(33);
        cmd_new_room(1);
        if (AGI.break_all_logics) return;
        jumpTo(1);
        break logicSwitch;
      case 501:
        cmd_set_menu(m1);
        cmd_set_menu_item(m2, c21);
        cmd_set_menu_item(m3, c2);
        cmd_set_menu_item(m4, c42);
        if (!cmd_isset(32)) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_set_menu_item(m5, c33);
      case 502:
        cmd_set_menu(m6);
        cmd_set_menu_item(m7, c3);
        cmd_set_menu_item(m8, c5);
        cmd_set_menu_item(m9, c20);
        cmd_set_menu_item(m10, c7);
        cmd_set_menu_item(m11, c1);
        cmd_set_menu(m12);
        cmd_set_menu_item(m13, c22);
        cmd_set_menu_item(m14, c10);
        cmd_set_menu(m15);
        cmd_set_menu_item(m16, c16);
        if (!(cmd_equaln(20, 0) && cmd_lessn(26, 2))) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_set_menu_item(m17, c6);
      case 503:
        cmd_set_menu_item(m18, c12);
        cmd_set_menu_item(m19, c15);
        cmd_set_menu_item(m20, c18);
        cmd_set_menu(m21);
        cmd_set_menu_item(m22, c24);
        cmd_set_menu_item(m23, c25);
        cmd_set_menu_item(m24, c23);
        cmd_set_menu_item(m25, c28);
        cmd_set_menu_item(m26, c20);
        cmd_set_menu_item(m27, c41);
        cmd_set_menu_item(m28, c40);
        if (!cmd_isset(32)) {
          jumpTo(504);
          break logicSwitch;
        }
        cmd_set_menu(m29);
        cmd_set_menu_item(m30, c29);
        cmd_set_menu_item(m31, c13);
        cmd_set_menu_item(m32, c11);
        cmd_set_menu_item(m33, c36);
        cmd_set_menu_item(m34, c31);
        cmd_set_menu_item(m35, c32);
      case 504:
        cmd_submit_menu();
        cmd_disable_item(c20);
        cmd_set(33);
        cmd_new_room(1);
        if (AGI.break_all_logics) return;
      case 1:
        jumpTo(2);
        break logicSwitch;
      case 500:
        cmd_call(97, [2702]);
        if (AGI.break_all_logics) return;
      case 2702:
      case 2:
        if (cmd_isset(5)) {
          cmd_load_logics(90);
          if (AGI.break_all_logics) return;
          cmd_clear_lines(24, 24, 0);
          cmd_animate_obj(0);
          cmd_load_view_v(16);
          cmd_set_view_v(0, 16);
          cmd_observe_objs(0);
          cmd_assignn(37, 255);
        }
      case 2703:
        ifSkip = ifSkipArrayShift();
        if (cmd_greatern(35, 0) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_call(94, [2703, 27000]);
              if (AGI.break_all_logics) return;
            case 27000:
              jumpTo(11);
              break logicSwitch;
          }
        }
        if (!cmd_isset(33)) {
          if (cmd_controller(c19)) {
            cmd_menu_input();
          }
        }
        if (cmd_controller(c21)) {
          cmd_print(m36);
          cmd_print(m37);
          jumptoLineArray = [2800];
          jumpTo(2800, 0);
          break logic;
        }
      case 2800:
        if (cmd_controller(c28) || cmd_said(0) || cmd_said(0, 1)) {
          cmd_assignn(10, 0);
        }
        if (cmd_controller(c23) || cmd_said(2) || cmd_said(2, 1)) {
          cmd_assignn(10, 1);
        }
        if (cmd_controller(c24) || cmd_said(3) || cmd_said(3, 1)) {
          cmd_assignn(10, 2);
        }
        if (cmd_controller(c25) || cmd_said(4) || cmd_said(4, 1)) {
          cmd_assignn(10, 4);
        }
        if (cmd_controller(c41) || cmd_said(5) || cmd_said(5, 1)) {
          cmd_decrement(10);
        }
        if (cmd_controller(c40) || cmd_said(6) || cmd_said(6, 1)) {
          cmd_increment(10);
        }
        if (cmd_controller(c26)) {
          cmd_decrement(23);
        }
        if (cmd_controller(c27) && cmd_lessn(23, 15)) {
          cmd_increment(23);
        }
        if (cmd_controller(c16)) {
          cmd_toggle(9);
        }
      case 2801:
        ifSkip = ifSkipArrayShift();
        if (!cmd_isset(33) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              if (cmd_controller(c6)) {
                toggle_monitor();
              }
              if (cmd_controller(c33)) {
                cmd_call(93, [2801, 28001]);
                if (AGI.break_all_logics) return;
              }
            case 28001:
              ifSkip = ifSkipArrayShift();
              if (!cmd_isset(32) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                  case 280000:
                    ifSkip = ifSkipArrayShift();
                    if (cmd_controller(c14) || ifSkip) {
                      switch (jumptoLineArrayShift()) {
                        default:
                        case 2800000:
                          cmd_set(32);
                          cmd_print(m38);
                          jumptoLineArray = [2801, 28001, 280000, 2800001];
                          ifSkipArray = [true, true, true];
                          jumpTo(2801, 0);
                          break logic;
                        case 2800001:
                          version();
                          cmd_load_logics(99);
                          if (AGI.break_all_logics) return;
                      }
                    }
                }
              }
              if (cmd_controller(c3) || cmd_said(7, 8) || cmd_said(7)) {
                cmd_stop_sound();
                cmd_save_game();
              }
              if (cmd_controller(c5) || cmd_said(9, 8) || cmd_said(9)) {
                cmd_stop_sound();
                cmd_restore_game();
              }
              if (cmd_controller(c7) || cmd_said(10, 8) || cmd_said(10)) {
                cmd_restart_game();
              }
              if (cmd_controller(c2) || cmd_said(11)) {
                cmd_call(92, [2801, 2704]);
                if (AGI.break_all_logics) return;
              }
            case 2704:
              if (cmd_controller(c42) || cmd_said(12)) {
                cmd_call(86, [2801, 2705]);
                if (AGI.break_all_logics) return;
              }
            case 2705:
              if (cmd_controller(c9)) {
                cmd_echo_line();
              }
              if (cmd_controller(c17)) {
                cmd_cancel_line();
              }
              if (cmd_controller(c15)) {
                init_joy();
              }
              if (cmd_controller(c18) || cmd_said(13, 8) || cmd_said(13)) {
                //pause();
                var soundOnOffTemp = Sound.on;
                Sound.setOnOff(false);
                alert('Game is paused.');
                Sound.setOnOff(soundOnOffTemp);
              }
              if (cmd_controller(c10) || cmd_said(14)) {
                cmd_status();
              }
            case 28002:
              ifSkip = ifSkipArrayShift();
              if (
                cmd_controller(c22) ||
                cmd_controller(c4) ||
                cmd_said(15, 14) ||
                ifSkip
              ) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_set(13);
                    cmd_status();
                  case 280000:
                    ifSkip = ifSkipArrayShift();
                    if (
                      (cmd_greatern(25, 0) && !cmd_equaln(25, 255)) ||
                      ifSkip
                    ) {
                      switch (jumptoLineArrayShift()) {
                        default:
                          cmd_assignv(255, 25);
                          cmd_addn(255, 219);
                          cmd_show_obj_v(255);
                          jumptoLineArray = [2801, 28002, 280000, 2800000];
                          ifSkipArray = [true, true, true];
                          jumpTo(2801, 0);
                          break logic;
                        case 2800000:
                      }
                    }
                    cmd_reset(13);
                }
              }
              if (cmd_controller(c1) || cmd_said(16, 8) || cmd_said(16)) {
                cmd_stop_sound();
                cmd_quit(0);
              }
          }
        }
        cmd_get_posn(0, 30, 31);
        if (cmd_equalv(6, 34) && cmd_equalv(30, 32) && cmd_equalv(31, 33)) {
          cmd_stop_cycling(0);
          jumpTo(3);
          break logicSwitch;
        }
        if (!cmd_isset(30)) {
          cmd_start_cycling(0);
        }
      case 3:
        cmd_assignv(32, 30);
        cmd_assignv(33, 31);
        cmd_assignv(34, 6);
        if (cmd_isset(31)) {
          cmd_start_cycling(0);
          jumpTo(4);
          break logicSwitch;
        }
        if (cmd_equaln(6, 0) || cmd_isset(30)) {
          cmd_stop_cycling(0);
        }
      case 4:
        if (cmd_said(17) || cmd_controller(c12)) {
          cmd_toggle(34);
          if (!cmd_isset(34)) {
            cmd_status_line_on();
            jumpTo(5);
            break logicSwitch;
          }
          cmd_assignn(37, 255);
        }
      case 5:
        if (cmd_isset(34) && !cmd_isset(33)) {
          if (!cmd_equalv(37, 11)) {
            cmd_set_text_attribute(0, 15);
            cmd_display(0, 18, m39);
            cmd_set_text_attribute(15, 0);
            cmd_assignv(37, 11);
          }
        }
        if (cmd_isset(12)) {
          cmd_clear_lines(23, 24, 0);
          cmd_reset(32);
          cmd_disable_item(c20);
        }
        if (!cmd_isset(5)) {
          jumpTo(505);
          break logicSwitch;
        }
        cmd_assignn(80, 40);
      case 6:
        cmd_reset_v(80);
        cmd_increment(80);
        if (!cmd_equaln(80, 101)) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_assignn(80, 103);
      case 506:
        if (!cmd_lessn(80, 150)) {
          jumpTo(507);
          break logicSwitch;
        }
        jumpTo(6);
        break logicSwitch;
      case 507:
        cmd_assignn(80, 81);
      case 7:
        cmd_lindirectn(80, 0);
        cmd_increment(80);
        if (!cmd_lessn(80, 110)) {
          jumpTo(508);
          break logicSwitch;
        }
        jumpTo(7);
        break logicSwitch;
      case 508:
        cmd_assignn(80, 0);
        cmd_assignn(79, 0);
        cmd_assignn(78, 0);
        cmd_assignn(77, 0);
        cmd_animate_obj(1);
        cmd_set_view(1, 0);
        cmd_set_loop(1, 0);
        cmd_set_cel(1, 0);
        cmd_assignn(91, 1);
        cmd_cycle_time(1, 91);
        cmd_fix_loop(1);
        if (!cmd_isset(102)) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_set(101);
      case 509:
      case 505:
        if (!cmd_isset(5) && cmd_isset(101)) {
          cmd_set(102);
          cmd_call(89, [2706]);
          if (AGI.break_all_logics) return;
        }
      case 2706:
        cmd_call_v(0, [2707]);
        if (AGI.break_all_logics) return;
      case 2707:
        cmd_get_posn(0, 30, 31);
        if (cmd_isset(184) && !cmd_isset(185) && cmd_lessn(73, 37)) {
          cmd_increment(72);
          if (!cmd_lessn(72, 200)) {
            cmd_assignn(72, 0);
            cmd_increment(73);
          }
        }
        if (
          !cmd_isset(151) &&
          cmd_has(i12) &&
          cmd_has(i14) &&
          cmd_has(i16) &&
          cmd_has(i19) &&
          cmd_has(i18)
        ) {
          cmd_set(151);
          cmd_print(m40);
          cmd_print(m41);
          cmd_print(m42);
          jumptoLineArray = [2802];
          jumpTo(2802, 9);
          break logic;
        }
      case 2802:
      case 2803:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(18, 19) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (
                (cmd_has(i12) &&
                  cmd_has(i14) &&
                  cmd_has(i16) &&
                  cmd_has(i19) &&
                  cmd_has(i18)) ||
                ifSkip
              ) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_program_control();
                    cmd_prevent_input();
                    cmd_print(m43);
                    jumptoLineArray = [2803, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2803, 0);
                    break logic;
                  case 280000:
                    cmd_load_view(15);
                    cmd_animate_obj(1);
                    cmd_set_view(1, 15);
                    cmd_set_loop(1, 0);
                    cmd_set_cel(1, 0);
                    cmd_position_v(1, 30, 31);
                    cmd_get_priority(0, 84);
                    cmd_set_priority_v(1, 84);
                    cmd_normal_cycle(1);
                    cmd_erase(0);
                    cmd_draw(1);
                    cmd_end_of_loop(1, 136);
                    cmd_assignn(71, 0);
                    jumpTo(8);
                    break logicSwitch;
                }
              }
            case 28001:
              ifSkip = ifSkipArrayShift();
              if (
                (!cmd_has(i12) &&
                  !cmd_has(i14) &&
                  !cmd_has(i16) &&
                  !cmd_has(i19) &&
                  !cmd_has(i18)) ||
                ifSkip
              ) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m44);
                    jumptoLineArray = [2803, 28001, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2803, 0);
                    break logic;
                  case 280000:
                    jumpTo(8);
                    break logicSwitch;
                }
              }
              cmd_print(m45);
              jumptoLineArray = [2803, 28002];
              ifSkipArray = [true];
              jumpTo(2803, 0);
              break logic;
            case 28002:
          }
        }
      case 8:
        if (cmd_isset(136)) {
          cmd_reset(136);
          cmd_assignn(71, 0);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 137);
        }
      case 2804:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(137) && !cmd_equaln(1, 14)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(137);
              cmd_print(m46);
              jumptoLineArray = [2804, 28000];
              ifSkipArray = [true];
              jumpTo(2804, 0);
              break logic;
            case 28000:
              cmd_set_loop(1, 2);
              cmd_set_cel(1, 0);
              cmd_end_of_loop(1, 138);
          }
        }
        if (cmd_isset(137) && cmd_equaln(1, 14)) {
          cmd_reset(137);
          cmd_set_loop(1, 3);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 139);
          if (!cmd_isset(189)) {
            cmd_set(189);
            cmd_increment(3);
          }
        }
        if (cmd_isset(138)) {
          cmd_reset(138);
          cmd_erase(1);
          cmd_draw(0);
          cmd_accept_input();
          cmd_player_control();
        }
        if (cmd_isset(139)) {
          cmd_reset(139);
          cmd_load_view(16);
          cmd_set_view(0, 16);
          cmd_erase(1);
          cmd_draw(0);
          cmd_set(140);
          cmd_accept_input();
          cmd_player_control();
        }
      case 2805:
        ifSkip = ifSkipArrayShift();
        if (
          cmd_said(20, 21) ||
          cmd_said(22, 23) ||
          cmd_said(22, 24, 23) ||
          cmd_said(22, 24, 25, 23) ||
          cmd_said(26, 23) ||
          cmd_said(26, 24, 23) ||
          cmd_said(26, 24, 25, 23) ||
          ifSkip
        ) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_equaln(0, 15) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m47);
                    jumptoLineArray = [2805, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2805, 0);
                    break logic;
                  case 280000:
                    jumpTo(9);
                    break logicSwitch;
                }
              }
              cmd_program_control();
              cmd_prevent_input();
              cmd_print(m48);
              cmd_print(m49);
              jumptoLineArray = [2805, 28001];
              ifSkipArray = [true];
              jumpTo(2805, 0);
              break logic;
            case 28001:
              cmd_load_view(1);
              cmd_animate_obj(1);
              cmd_set_view(1, 1);
              if (cmd_greatern(30, 0)) {
                cmd_decrement(30);
              }
              cmd_decrement(31);
              cmd_position_v(1, 30, 31);
              cmd_get_priority(0, 84);
              cmd_set_priority_v(1, 84);
              cmd_normal_cycle(1);
              cmd_assignn(91, 2);
              cmd_cycle_time(1, 91);
              cmd_erase(0);
              cmd_draw(1);
              cmd_stop_cycling(1);
              cmd_end_of_loop(1, 103);
          }
        }
      case 9:
        if (cmd_equaln(0, 14)) {
          cmd_current_view(1, 85);
          if (cmd_equaln(85, 1)) {
            cmd_current_cel(1, 87);
            if (cmd_equaln(87, 24)) {
              cmd_load_sound(103);
              cmd_sound(103, 147);
              cmd_set(148);
            }
          }
        }
      case 2806:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(103) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(103);
              cmd_load_view(2);
              cmd_set_view(1, 2);
              cmd_normal_cycle(1);
              cmd_draw(1);
              cmd_print(m50);
              jumptoLineArray = [2806, 28000];
              ifSkipArray = [true];
              jumpTo(2806, 0);
              break logic;
            case 28000:
              cmd_stop_cycling(1);
              cmd_end_of_loop(1, 104);
          }
        }
        if (cmd_isset(104)) {
          cmd_reset(104);
          cmd_assignn(35, 1);
          if (!cmd_isset(150)) {
            cmd_set(150);
            cmd_increment(3);
          }
        }
        if (!cmd_equalv(40, 3)) {
          cmd_set_text_attribute(10, 0);
          cmd_display(24, 32, m51);
          cmd_set_text_attribute(15, 0);
          cmd_assignv(40, 3);
          cmd_assignn(41, 21);
          jumpTo(10);
          break logicSwitch;
        }
        if (cmd_greatern(41, 0)) {
          if (cmd_equaln(41, 1)) {
            cmd_clear_lines(24, 24, 0);
          }
          cmd_decrement(41);
        }
      case 10:
        if (cmd_isset(101)) {
          cmd_reset(101);
          cmd_distance(0, 1, 81);
          if (cmd_lessn(81, 255)) {
            cmd_current_view(1, 85);
            cmd_current_loop(1, 86);
            cmd_current_cel(1, 87);
            cmd_get_priority(1, 84);
            cmd_get_posn(1, 82, 83);
            cmd_assignn(89, 4);
            cmd_erase(1);
            cmd_set_loop(1, 0);
            cmd_set_cel(1, 0);
            cmd_add_to_pic_v(85, 86, 87, 82, 83, 84, 89);
          }
        }
        if (cmd_isset(102)) {
          cmd_call(89, [2708]);
          if (AGI.break_all_logics) return;
        }
      case 2708:
        if (cmd_isset(32)) {
          cmd_call(99, [2709]);
          if (AGI.break_all_logics) return;
        }
      case 2709:
        cmd_call(90, [2710]);
        if (AGI.break_all_logics) return;
      case 2710:
      case 2807:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(2) && cmd_greatern(9, 0)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(2);
              if (cmd_equaln(9, 1)) {
                cmd_print(m52);
                jumptoLineArray = [2807, 28000];
                ifSkipArray = [true];
                jumpTo(2807, 0);
                break logic;
              }
            case 28000:
              if (cmd_equaln(9, 2)) {
                cmd_print(m53);
                jumptoLineArray = [2807, 28001];
                ifSkipArray = [true];
                jumpTo(2807, 0);
                break logic;
              }
            case 28001:
              if (cmd_equaln(9, 3)) {
                cmd_print(m54);
                jumptoLineArray = [2807, 28002];
                ifSkipArray = [true];
                jumpTo(2807, 0);
                break logic;
              }
            case 28002:
              if (cmd_equaln(9, 4)) {
                cmd_print(m55);
                jumptoLineArray = [2807, 28003];
                ifSkipArray = [true];
                jumpTo(2807, 0);
                break logic;
              }
            case 28003:
              if (cmd_equaln(9, 5)) {
                cmd_print(m56);
                jumptoLineArray = [2807, 28004];
                ifSkipArray = [true];
                jumpTo(2807, 0);
                break logic;
              }
            case 28004:
              if (cmd_equaln(9, 6)) {
                cmd_print(m57);
                jumptoLineArray = [2807, 28005];
                ifSkipArray = [true];
                jumpTo(2807, 0);
                break logic;
              }
            case 28005:
              if (cmd_greatern(9, 6) && !cmd_isset(4)) {
                cmd_set(2);
              }
          }
        }
      case 2808:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(2) && !cmd_isset(4)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m58);
              jumptoLineArray = [2808, 28000];
              ifSkipArray = [true];
              jumpTo(2808, 0);
              break logic;
            case 28000:
              cmd_reset(2);
          }
        }
      case 11:
        return;
    }
  }
};
MESSAGES[0] = [
  '',
  'FQ1',
  'About      ',
  'Help   <F1>',
  'Hint   <ALT+H>',
  'Debug Help ',
  'File',
  'Save     <F5>',
  'Restore  <F7>',
  '-------------',
  'Restart  <F9>',
  'Quit     <Alt+Z>',
  'Action',
  'See Object  <F4>',
  'Inventory   <Tab>',
  'Special',
  'Sound On/Off  <F2>',
  'Color/BW      <Ctrl+R>',
  'Clock On/Off  <F6>',
  'Joystick      <Ctrl+J>',
  'Pause         <Esc>',
  'Speed',
  'Normal ',
  'Slow   ',
  'Fast   ',
  'Fastest',
  '---------',
  'Faster ',
  'Slower ',
  'Debug',
  'Ego Info   <Alt+E>',
  'Pri Screen <Alt+P>',
  'Memory     <Alt+M>',
  'Obj Info   <Alt+I>',
  'Coords     <Alt+X>',
  'Get All           ',
  '\n        Fro Quest 1\n\n        Version 1.1\n\n  Designed by X28 Project  \n\n    (C)2015 X28 Project\n    All Rights Reserved\n\n     www.x28project.com\n',
  '\n         Fro Quest\n (Original Game Soundtrack) \n\n   Remixed and Remastered   \n\n   Download available at:   \n\n     www.x28project.com     \n',
  '\n  Fro Quest 1  \n\n  Version 1_0  \n',
  ' %v13:%v12|2:%v11|2 ',
  'Congratulations!',
  'You have all the necessary elementals.',
  "Why don't you try to 'combine' the 'elementals'.",
  'By your powers combed together...',
  'Combine what? I think you might be missing something...',
  'You do not have all the necessary elements...',
  'With no evildoers to bring to justice, the power fades...',
  'For once you feel at peace. Use the kit at some other time... in some other place.',
  'Ahh yes. \n\n"The Emergency Suicide Kit" \n\nIt\'s rumored to be the big hit this holiday season.',
  "At least now you'll know if it really works.",
  "Hmmm... I guess there's really no going back now.",
  'Score +1',
  'I don\'t understand "%w1".',
  '"%w2" is not in my vocabulary.',
  'What is "%w3"?',
  'I don\'t understand "%w4".',
  '"%w5" is not in my vocabulary.',
  'What is "%w6"?',
  "I don't understand your request.",
];

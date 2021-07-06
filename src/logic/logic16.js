window.logic16 = function () {
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
        if (!cmd_equaln(1, 7)) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_set(140);
        cmd_assignn(1, 17);
        cmd_load_pic(1);
        cmd_draw_pic(1);
        cmd_discard_pic(1);
        cmd_show_pic();
        cmd_print(1);
        jumptoLineArray = [2800];
        jumpTo(2800, 16);
        break logic;
      case 2800:
        cmd_load_pic(0);
        cmd_draw_pic(0);
        cmd_discard_pic(0);
        cmd_assignn(42, 0);
        cmd_load_sound(16);
        cmd_sound(16, 147);
      case 501:
        cmd_load_view(18);
        cmd_animate_obj(18);
        cmd_set_view(18, 18);
        cmd_set_loop(18, 0);
        if (!cmd_isset(140)) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_set_cel(18, 1);
        jumpTo(1);
        break logicSwitch;
      case 502:
        cmd_set_cel(18, 0);
      case 1:
        cmd_position(18, 26, 87);
        cmd_stop_cycling(18);
        cmd_draw(18);
        if (!!cmd_isset(140)) {
          jumpTo(503);
          break logicSwitch;
        }
        cmd_assignn(6, 1);
        cmd_set_loop(0, 3);
        cmd_position(0, 77, 166);
        cmd_move_obj(0, 77, 146, 1, 40);
        cmd_assignn(100, 0);
        cmd_draw(0);
        jumpTo(2);
        break logicSwitch;
      case 503:
        cmd_set(41);
        cmd_assignn(101, 0);
      case 2:
        cmd_show_pic();
      case 500:
        if (cmd_equaln(1, 7) && cmd_isset(147) && !cmd_isset(148)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(3);
            break logicSwitch;
          }
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_sound(16, 147);
        }
      case 3:
      case 2801:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(40) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              if (cmd_equaln(100, 0)) {
                cmd_program_control();
                cmd_prevent_input();
                cmd_increment(100);
                cmd_set_loop(0, 1);
                cmd_set_cel(0, 3);
                cmd_decrement(31);
                cmd_position_v(0, 30, 31);
              }
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (
                (cmd_isset(40) && !cmd_lessn(100, 1) && cmd_lessn(100, 50)) ||
                ifSkip
              ) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_increment(100);
                    if (cmd_equaln(100, 3)) {
                      cmd_print(2);
                      jumptoLineArray = [2801, 28000, 280000];
                      ifSkipArray = [true, true];
                      jumpTo(2801, 16);
                      break logic;
                    }
                  case 280000:
                    if (cmd_equaln(100, 10)) {
                      cmd_print(3);
                      jumptoLineArray = [2801, 28000, 280001];
                      ifSkipArray = [true, true];
                      jumpTo(2801, 16);
                      break logic;
                    }
                  case 280001:
                    if (cmd_equaln(100, 30)) {
                      cmd_print(4);
                      jumptoLineArray = [2801, 28001];
                      ifSkipArray = [true];
                      jumpTo(2801, 16);
                      break logic;
                    }
                }
              }
            case 28001:
              if (cmd_equaln(100, 50)) {
                cmd_load_sound(102);
                cmd_sound(102, 147);
                cmd_increment(100);
                cmd_load_view(17);
                cmd_animate_obj(1);
                cmd_set_view(1, 17);
                cmd_set_loop(1, 7);
                cmd_set_cel(1, 0);
                cmd_position_v(1, 30, 31);
                cmd_get_priority(0, 84);
                cmd_set_priority_v(1, 84);
                cmd_assignn(91, 2);
                cmd_cycle_time(1, 91);
                cmd_erase(0);
                cmd_draw(1);
                cmd_end_of_loop(1, 100);
              }
              if (!cmd_lessn(100, 51) && cmd_lessn(100, 100)) {
                cmd_increment(100);
              }
              if (cmd_equaln(100, 100)) {
                cmd_increment(100);
                cmd_load_view(19);
                cmd_animate_obj(19);
                cmd_set_view(19, 19);
                cmd_set_loop(19, 0);
                cmd_set_cel(19, 0);
                cmd_position(19, 88, 127);
                cmd_stop_cycling(19);
                cmd_draw(19);
                cmd_assignn(91, 8);
                cmd_cycle_time(19, 91);
                cmd_end_of_loop(19, 42);
              }
              if (
                cmd_isset(42) &&
                !cmd_lessn(100, 101) &&
                cmd_lessn(100, 200)
              ) {
                cmd_increment(100);
              }
            case 28002:
              ifSkip = ifSkipArrayShift();
              if ((cmd_isset(42) && cmd_equaln(100, 200)) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_increment(100);
                    cmd_print(5);
                    jumptoLineArray = [2801, 28002, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2801, 16);
                    break logic;
                  case 280000:
                    cmd_reset(40);
                }
              }
          }
        }
        if (
          !cmd_isset(40) &&
          cmd_isset(42) &&
          (cmd_have_key() || cmd_controller(c30))
        ) {
          cmd_print(6);
          jumptoLineArray = [2802];
          jumpTo(2802, 16);
          break logic;
        }
      case 2802:
      case 2803:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(41) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              if (cmd_equaln(101, 0)) {
                cmd_set(44);
                cmd_assignn(102, 0);
                cmd_assignn(103, 0);
                cmd_assignn(104, 0);
                cmd_program_control();
                cmd_prevent_input();
              }
              if (!cmd_lessn(101, 0) && !cmd_greatern(101, 100)) {
                cmd_increment(101);
              }
              if (cmd_equaln(104, 80) && cmd_equaln(101, 101)) {
                cmd_increment(101);
                cmd_load_view(19);
                cmd_animate_obj(19);
                cmd_set_view(19, 19);
                cmd_set_loop(19, 1);
                cmd_set_cel(19, 0);
                cmd_position(19, 68, 148);
                cmd_stop_cycling(19);
                cmd_draw(19);
                cmd_assignn(91, 8);
                cmd_cycle_time(19, 91);
                cmd_end_of_loop(19, 43);
              }
              if (
                cmd_isset(43) &&
                !cmd_lessn(101, 101) &&
                cmd_lessn(101, 200)
              ) {
                cmd_increment(101);
              }
              if (cmd_isset(43) && cmd_equaln(101, 200)) {
                cmd_increment(101);
                cmd_print(7);
                jumptoLineArray = [2803, 28000];
                ifSkipArray = [true];
                jumpTo(2803, 16);
                break logic;
              }
            case 28000:
              if (
                cmd_isset(43) &&
                !cmd_lessn(101, 201) &&
                cmd_lessn(101, 250)
              ) {
                cmd_increment(101);
              }
            case 28001:
              ifSkip = ifSkipArrayShift();
              if ((cmd_isset(43) && cmd_equaln(101, 250)) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_increment(101);
                    cmd_reset(41);
                    cmd_reset(15);
                    cmd_assignn(21, 10);
                    cmd_print_at(
                      'Art and Animation\n\n   X28 Project   ',
                      5,
                      20,
                      0
                    );
                    jumptoLineArray = [2803, 28001, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2803, 16);
                    break logic;
                  case 280000:
                    cmd_reset(15);
                    cmd_assignn(21, 10);
                    cmd_print_at(
                      '     Design      \n\n   X28 Project   ',
                      6,
                      21,
                      0
                    );
                    jumptoLineArray = [2803, 28001, 280001];
                    ifSkipArray = [true, true];
                    jumpTo(2803, 16);
                    break logic;
                  case 280001:
                    cmd_reset(15);
                    cmd_assignn(21, 10);
                    cmd_print_at(
                      '   Programming   \n\n   X28 Project   ',
                      5,
                      22,
                      0
                    );
                    jumptoLineArray = [2803, 28001, 280002];
                    ifSkipArray = [true, true];
                    jumpTo(2803, 16);
                    break logic;
                  case 280002:
                    cmd_reset(15);
                    cmd_assignn(21, 10);
                    cmd_print_at(
                      '      Music      \n\n   X28 Project   ',
                      4,
                      21,
                      0
                    );
                    jumptoLineArray = [2803, 28001, 280003];
                    ifSkipArray = [true, true];
                    jumpTo(2803, 16);
                    break logic;
                  case 280003:
                    cmd_reset(15);
                    cmd_assignn(21, 10);
                    cmd_print_at(
                      '   Good Times    \n\n   X28 Project   ',
                      5,
                      20,
                      0
                    );
                    jumptoLineArray = [2803, 28001, 280004];
                    ifSkipArray = [true, true];
                    jumpTo(2803, 16);
                    break logic;
                  case 280004:
                    cmd_load_view(95);
                    cmd_animate_obj(95);
                    cmd_set_view(95, 95);
                    cmd_set_loop(95, 0);
                    cmd_set_cel(95, 0);
                    cmd_position(95, 63, 49);
                    cmd_stop_cycling(95);
                    cmd_draw(95);
                    cmd_assignn(91, 2);
                    cmd_cycle_time(95, 91);
                    cmd_end_of_loop(95, 45);
                    cmd_assignn(105, 20);
                }
              }
          }
        }
        if (cmd_isset(45)) {
          if (cmd_greatern(105, 0)) {
            cmd_decrement(105);
            jumpTo(4);
            break logicSwitch;
          }
          cmd_reset(45);
          if (!cmd_isset(47)) {
            cmd_set_loop(95, 1);
          }
          cmd_set_cel(95, 0);
          cmd_assignn(91, 1);
          cmd_cycle_time(95, 91);
          cmd_end_of_loop(95, 46);
          cmd_assignn(105, 0);
        }
      case 4:
        if (cmd_isset(46)) {
          if (!cmd_isset(47)) {
            cmd_set(47);
            cmd_print_at(
              'To be continued in...\n\n\n    Fro Quest II     \n\n Shadows of Darkness \n',
              8,
              16,
              0
            );
          }
          if (cmd_lessn(105, 60)) {
            cmd_increment(105);
            jumpTo(5);
            break logicSwitch;
          }
          cmd_reset(46);
          cmd_set_loop(95, 2);
          cmd_set_cel(95, 4);
          cmd_reverse_loop(95, 45);
          cmd_assignn(105, 0);
        }
      case 5:
        if (
          !cmd_isset(41) &&
          cmd_isset(43) &&
          (cmd_have_key() || cmd_controller(c30))
        ) {
          cmd_print(14);
          jumptoLineArray = [2804];
          jumpTo(2804, 16);
          break logic;
        }
      case 2804:
        if (cmd_isset(44)) {
          if (cmd_equaln(102, 0)) {
            cmd_set_text_attribute(12, 0);
            cmd_display(22, 3, 'Love');
          }
          if (cmd_equaln(102, 40)) {
            cmd_display(22, 8, 'for');
          }
          if (cmd_equaln(102, 65)) {
            cmd_display(22, 12, 'three,');
          }
          if (cmd_equaln(102, 120)) {
            cmd_display(23, 5, "That's");
          }
          if (cmd_equaln(102, 130)) {
            cmd_display(23, 12, 'you,');
          }
          if (cmd_equaln(102, 155)) {
            cmd_display(23, 17, 'and');
          }
          if (cmd_equaln(102, 165)) {
            cmd_display(23, 21, 'you,');
          }
          if (cmd_equaln(102, 180)) {
            cmd_display(23, 26, 'and');
          }
          if (cmd_equaln(102, 190)) {
            cmd_display(23, 30, 'me.');
          }
          if (cmd_equaln(103, 60)) {
            cmd_display(24, 7, 'Love');
          }
          if (cmd_equaln(103, 90)) {
            cmd_display(24, 12, 'for');
          }
          if (cmd_equaln(103, 115)) {
            cmd_display(24, 16, 'three.');
          }
          if (cmd_lessn(102, 200)) {
            cmd_increment(102);
            jumpTo(6);
            break logicSwitch;
          }
          if (cmd_lessn(103, 200)) {
            cmd_increment(103);
            jumpTo(6);
            break logicSwitch;
          }
          if (cmd_lessn(104, 80)) {
            cmd_increment(104);
          }
        }
      case 6:
        return;
    }
  }
};
MESSAGES[16] = [
  '',
  'A short (hopefully not too short) time later...',
  'Really!',
  'In your own bed!',
  'Well, I never!',
  'There has to be something better than a "not-so-great" ending.',
  'Thank you for playing Fro Quest 1. Better luck next time!',
  'Now that was a "much better" ending.',
  'Art and Animation\n\n   X28 Project   ',
  '     Design      \n\n   X28 Project   ',
  '   Programming   \n\n   X28 Project   ',
  '      Music      \n\n   X28 Project   ',
  '   Good Times    \n\n   X28 Project   ',
  'To be continued in...\n\n\n    Fro Quest II     \n\n Shadows of Darkness \n',
  'Thank you for playing Fro Quest 1!',
  'Love',
  'for',
  'three,',
  "That's",
  'you,',
  'and',
  'me.',
  'three.',
];
CONTROLS[16] =
  '?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4<4><A.{<45{595U5>K5U5.{.,5{5E5U5>K5Z5.+.,5{595Z5>P5U5.+.,5{595U5>U5U5.+.,5{595U5>U5U5.+.{5{5Ea>U5Z5.^.{5{5>,5U5.^.{5{5>,5U5.^.{5{5>,5U5.^.+5{5>.45Z5.!.+5{5>.95U5.!.+5{5>.95U5.!.^5,5>.95Z5.x.^5{5>.E5Z5.x.^5{5>.E5Z5.x.^5{5>.K5U5.x.!5,5>.K5Z5.r.!5{5>.P5Z5.r.!5{5>.P5Z5.r.!5{5>.U5U5.r.x5,5>.U5Z5.l.x5{5>.Z5Z5.l.x5{5>.Z5Z5.l.r5,5>.g5Z5.g.r5,5<4=<r5Z5.g.r5{5<95PLP5<r5Z5.g.r5{5<95K5P5K5<r5UA.g.l5,5<95K5P5K5<x5EAE5.Z.l5,5<95E5Z5E5<x595P5.Z.l5{5<E59s95<xAU5.Z.l.0<E595l595<!5U5.Z.g5<.EArF<^5U5.U.g5<.EAxA<^5U5.U.g5<.E=<^5U5.U.Z5<.K=<^5U5.U.Z5<.K=<+5U5.P.Z5<.K=<+5U5.P.Z5><{5U5.P.U5><.45U5.K.U5><.45U5.K.U5><.45U5.K.U5><.95P5.K.P5><.E5U5.E.P5><.E5U5.E.P5><.E5U5.E.K5><.P5P5.E.K5><.P5U5.9.K5><.P5U5.9.K5><.U5P5.9.E5><.Z5U5.4.E5><.Z5U5.4.E5><.g5P5.4.95><.l5P5.4.95><.l5U5,.95><.l5PA,.95><.r59A95,.45><.xAK5,.45/45{.45/45{.45/45{,5/E5+,5/E5+,5/E5+{5/K5+{5/P5^{5/P5^{5/P5^+5/U5^+5/Z5!+5/Z5!+5/Z5!^5/l5x^5/l5x^5/l5x!5/r5x!5/x5r!5/x5r!5/x5rx5/!5rx5/^5lx5/^5lx5/^5lr5/+5lr5/{5gr5/{5gl5/,5gl5/.45Zl5/.45Zl5/.45Zg5/.95Zg5/.E5Ug5/.E5Ug5/.E5UZ5/.K5UZ5/.P5PZ<.m<9<.@P';

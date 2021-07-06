window.logic8 = function () {
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
        cmd_load_view(93);
        cmd_animate_obj(93);
        cmd_set_view(93, 93);
        cmd_position(93, 56, 156);
        cmd_set_priority(93, 13);
        cmd_ignore_objs(93);
        cmd_assignn(80, 2);
        cmd_cycle_time(93, 80);
        cmd_draw(93);
        cmd_assignn(100, 0);
        cmd_assignn(101, 60);
        cmd_end_of_loop(93, 90);
        if (!cmd_isset(193)) {
          jumpTo(501);
          break logicSwitch;
        }
        cmd_load_view(226);
        cmd_set_view(226, 226);
        cmd_set_loop(226, 1);
        cmd_position(226, 63, 144);
        cmd_ignore_objs(226);
        cmd_normal_cycle(226);
        cmd_assignn(91, 4);
        cmd_cycle_time(226, 91);
        cmd_draw(226);
      case 501:
        if (!cmd_equaln(1, 12)) {
          jumpTo(502);
          break logicSwitch;
        }
        cmd_set_loop(0, 3);
        cmd_assignn(6, 0);
        cmd_position(0, 80, 165);
        cmd_get_posn(0, 30, 31);
        cmd_set_priority(0, 14);
        cmd_load_view(80);
        cmd_animate_obj(80);
        cmd_set_view(80, 80);
        cmd_position(80, 50, 80);
        cmd_set_priority(80, 15);
        cmd_ignore_objs(80);
        cmd_ignore_horizon(80);
        cmd_stop_cycling(80);
        cmd_draw(80);
        cmd_assignn(35, 1);
        jumpTo(1);
        break logicSwitch;
      case 502:
        cmd_set_loop(0, 3);
        cmd_assignn(6, 0);
        cmd_position(0, 80, 165);
        cmd_draw(0);
      case 1:
        cmd_assignn(42, 0);
        cmd_load_sound(8);
        cmd_sound(8, 147);
        cmd_show_pic();
      case 500:
        if (cmd_isset(147)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(2);
            break logicSwitch;
          }
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_sound(8, 147);
        }
      case 2:
      case 2800:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_print(m1);
              cmd_print(m2);
              cmd_print(m3);
              cmd_print(m4);
              jumptoLineArray = [2800, 28000];
              ifSkipArray = [true];
              jumpTo(2800, 8);
              break logic;
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(124) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m5);
                    jumptoLineArray = [2800, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2800, 8);
                    break logic;
                  case 280000:
                    jumpTo(3);
                    break logicSwitch;
                }
              }
              cmd_print(m6);
              jumptoLineArray = [2802];
              jumpTo(2802, 8);
              break logic;
          }
        }
      case 2802:
      case 3:
        if (cmd_said(15, 29)) {
          cmd_print(m7);
          jumptoLineArray = [2803];
          jumpTo(2803, 8);
          break logic;
        }
      case 2803:
        if (cmd_said(15, 33)) {
          cmd_print(m8);
          cmd_print(m9);
          jumptoLineArray = [2804];
          jumpTo(2804, 8);
          break logic;
        }
      case 2804:
        if (cmd_said(15, 96)) {
          cmd_print(m10);
          jumptoLineArray = [2805];
          jumpTo(2805, 8);
          break logic;
        }
      case 2805:
        if (cmd_said(15, 97)) {
          cmd_print(m11);
          jumptoLineArray = [2806];
          jumpTo(2806, 8);
          break logic;
        }
      case 2806:
        if (cmd_said(15, 34)) {
          cmd_print(m12);
          jumptoLineArray = [2807];
          jumpTo(2807, 8);
          break logic;
        }
      case 2807:
        if (cmd_said(15, 35)) {
          cmd_print(m12);
          jumptoLineArray = [2808];
          jumpTo(2808, 8);
          break logic;
        }
      case 2808:
        if (cmd_said(15, 37)) {
          cmd_print(m13);
          jumptoLineArray = [2809];
          jumpTo(2809, 8);
          break logic;
        }
      case 2809:
        if (cmd_said(15, 38)) {
          cmd_print(m14);
          jumptoLineArray = [2810];
          jumpTo(2810, 8);
          break logic;
        }
      case 2810:
        if (cmd_said(15, 39)) {
          cmd_print(m15);
          jumptoLineArray = [2811];
          jumpTo(2811, 8);
          break logic;
        }
      case 2811:
        if (cmd_said(15, 40)) {
          cmd_print(m16);
          jumptoLineArray = [2812];
          jumpTo(2812, 8);
          break logic;
        }
      case 2812:
      case 2813:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(15, 35) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_isset(124) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m17);
                    jumptoLineArray = [2813, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2813, 8);
                    break logic;
                  case 280000:
                    jumpTo(4);
                    break logicSwitch;
                }
              }
              cmd_print(m18);
              jumptoLineArray = [2814];
              jumpTo(2814, 8);
              break logic;
          }
        }
      case 2814:
      case 4:
        if (cmd_isset(124) && (cmd_said(15, 35, 19) || cmd_said(15, 19))) {
          cmd_print(m17);
          jumptoLineArray = [2815];
          jumpTo(2815, 8);
          break logic;
        }
      case 2815:
        if (cmd_said(50, 43)) {
          cmd_print(m19);
          jumptoLineArray = [2816];
          jumpTo(2816, 8);
          break logic;
        }
      case 2816:
        if (cmd_said(50, 97)) {
          cmd_print(m20);
          jumptoLineArray = [2817];
          jumpTo(2817, 8);
          break logic;
        }
      case 2817:
        if (cmd_said(50, 33) || cmd_said(50, 96)) {
          cmd_print(m21);
          jumptoLineArray = [2818];
          jumpTo(2818, 8);
          break logic;
        }
      case 2818:
        cmd_increment(100);
        if (cmd_equalv(100, 101)) {
          cmd_assignn(100, 0);
          cmd_random(80, 100, 101);
          cmd_set_cel(93, 0);
          cmd_end_of_loop(93, 90);
        }
      case 2819:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(41, 29) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_set(95);
              cmd_print(m22);
              jumptoLineArray = [2819, 28000];
              ifSkipArray = [true];
              jumpTo(2819, 8);
              break logic;
            case 28000:
              cmd_reset(92);
              cmd_assignn(101, 0);
              cmd_assignn(104, 0);
              cmd_load_view(200);
              cmd_animate_obj(200);
              cmd_set_view(200, 200);
              cmd_set_loop(200, 1);
              cmd_position(200, 5, 67);
              cmd_ignore_objs(200);
              cmd_assignn(91, 2);
              cmd_cycle_time(200, 91);
              cmd_draw(200);
              cmd_assignn(102, 0);
              cmd_assignn(103, 14);
              cmd_end_of_loop(200, 91);
          }
        }
        if (cmd_isset(91)) {
          cmd_reset(91);
          cmd_random(0, 6, 80);
          cmd_set_loop(200, 1);
          cmd_set_cel_v(200, 80);
          cmd_end_of_loop(200, 91);
        }
        cmd_increment(102);
        if (!(cmd_isset(95) && cmd_equalv(102, 103))) {
          jumpTo(503);
          break logicSwitch;
        }
        if (!!cmd_isset(92)) {
          jumpTo(504);
          break logicSwitch;
        }
        if (!!cmd_isset(93)) {
          jumpTo(505);
          break logicSwitch;
        }
        if (!cmd_equaln(104, 0)) {
          jumpTo(506);
          break logicSwitch;
        }
        cmd_print(m23);
        jumptoLineArray = [2820];
        jumpTo(2820, 8);
        break logic;
      case 2820:
      case 506:
        if (!cmd_equaln(104, 1)) {
          jumpTo(507);
          break logicSwitch;
        }
        cmd_print(m24);
        jumptoLineArray = [2821];
        jumpTo(2821, 8);
        break logic;
      case 2821:
      case 507:
        if (!cmd_equaln(104, 2)) {
          jumpTo(508);
          break logicSwitch;
        }
        cmd_print(m25);
        jumptoLineArray = [2822];
        jumpTo(2822, 8);
        break logic;
      case 2822:
      case 508:
        if (!cmd_equaln(104, 3)) {
          jumpTo(509);
          break logicSwitch;
        }
        cmd_print(m26);
        jumptoLineArray = [2823];
        jumpTo(2823, 8);
        break logic;
      case 2823:
      case 509:
        if (!cmd_equaln(104, 4)) {
          jumpTo(510);
          break logicSwitch;
        }
        cmd_print(m27);
        jumptoLineArray = [2824];
        jumpTo(2824, 8);
        break logic;
      case 2824:
      case 510:
        if (!cmd_equaln(104, 5)) {
          jumpTo(511);
          break logicSwitch;
        }
        cmd_print(m28);
        jumptoLineArray = [2825];
        jumpTo(2825, 8);
        break logic;
      case 2825:
      case 511:
        if (!cmd_equaln(104, 6)) {
          jumpTo(512);
          break logicSwitch;
        }
        cmd_print(m29);
        jumptoLineArray = [2826];
        jumpTo(2826, 8);
        break logic;
      case 2826:
      case 512:
        if (!cmd_equaln(104, 7)) {
          jumpTo(513);
          break logicSwitch;
        }
        cmd_print(m30);
        jumptoLineArray = [2827];
        jumpTo(2827, 8);
        break logic;
      case 2827:
      case 513:
        if (!cmd_equaln(104, 8)) {
          jumpTo(514);
          break logicSwitch;
        }
        cmd_print(m31);
        jumptoLineArray = [2828];
        jumpTo(2828, 8);
        break logic;
      case 2828:
        cmd_erase(200);
        cmd_reset(95);
        cmd_print(m32);
        jumptoLineArray = [2829];
        jumpTo(2829, 8);
        break logic;
      case 2829:
        if (!!cmd_isset(193)) {
          jumpTo(515);
          break logicSwitch;
        }
        cmd_print(m33);
        jumptoLineArray = [2830];
        jumpTo(2830, 8);
        break logic;
      case 2830:
        jumpTo(5);
        break logicSwitch;
      case 515:
        cmd_print(m34);
        jumptoLineArray = [2831];
        jumpTo(2831, 8);
        break logic;
      case 2831:
      case 5:
        cmd_set(92);
        if (!!cmd_isset(190)) {
          jumpTo(516);
          break logicSwitch;
        }
        cmd_set(190);
        cmd_increment(3);
      case 516:
      case 514:
        jumpTo(7);
        break logicSwitch;
      case 505:
        if (!cmd_equaln(104, 0)) {
          jumpTo(517);
          break logicSwitch;
        }
        cmd_print(m35);
        jumptoLineArray = [2832];
        jumpTo(2832, 8);
        break logic;
      case 2832:
      case 517:
        if (!cmd_equaln(104, 1)) {
          jumpTo(518);
          break logicSwitch;
        }
        cmd_print(m36);
        jumptoLineArray = [2833];
        jumpTo(2833, 8);
        break logic;
      case 2833:
      case 518:
        if (!cmd_equaln(104, 2)) {
          jumpTo(519);
          break logicSwitch;
        }
        cmd_print(m37);
        jumptoLineArray = [2834];
        jumpTo(2834, 8);
        break logic;
      case 2834:
      case 519:
        if (!cmd_equaln(104, 3)) {
          jumpTo(520);
          break logicSwitch;
        }
        cmd_print(m38);
        jumptoLineArray = [2835];
        jumpTo(2835, 8);
        break logic;
      case 2835:
        if (!!cmd_isset(192)) {
          jumpTo(521);
          break logicSwitch;
        }
        cmd_set(192);
        cmd_increment(3);
      case 521:
        cmd_erase(200);
        cmd_reset(95);
        cmd_print(m39);
        jumptoLineArray = [2836];
        jumpTo(2836, 8);
        break logic;
      case 2836:
        if (!!cmd_isset(193)) {
          jumpTo(522);
          break logicSwitch;
        }
        cmd_print(m33);
        jumptoLineArray = [2837];
        jumpTo(2837, 8);
        break logic;
      case 2837:
        jumpTo(6);
        break logicSwitch;
      case 522:
        cmd_print(m34);
        jumptoLineArray = [2838];
        jumpTo(2838, 8);
        break logic;
      case 2838:
      case 6:
        cmd_set(92);
      case 520:
      case 7:
        cmd_increment(104);
      case 504:
        cmd_assignn(102, 0);
        cmd_random(14, 40, 103);
        cmd_set_loop(200, 0);
        cmd_end_of_loop(200, 91);
      case 503:
      case 2839:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(92) && (cmd_said(98) || cmd_said(99, 98))) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_set(95);
              cmd_print(m40);
              jumptoLineArray = [2839, 28000];
              ifSkipArray = [true];
              jumpTo(2839, 8);
              break logic;
            case 28000:
              cmd_reset(92);
              cmd_set(93);
              cmd_draw(200);
              cmd_assignn(104, 0);
              cmd_assignn(102, 0);
              cmd_assignn(103, 14);
              if (!cmd_isset(191)) {
                cmd_set(191);
                cmd_increment(3);
              }
          }
        }
        if (cmd_isset(92) && (cmd_said(100) || cmd_said(99, 100))) {
          cmd_print(m41);
          cmd_print(m42);
          cmd_print(m43);
          jumptoLineArray = [2840];
          jumpTo(2840, 8);
          break logic;
        }
      case 2840:
        if (!(cmd_said(42, 71) || cmd_said(42, 71, 29))) {
          jumpTo(523);
          break logicSwitch;
        }
        if (!(cmd_has(i7) && !cmd_isset(94))) {
          jumpTo(524);
          break logicSwitch;
        }
        if (!cmd_center_posn(0, 42, 132, 72, 160)) {
          jumpTo(525);
          break logicSwitch;
        }
        cmd_print(m44);
        jumptoLineArray = [2841];
        jumpTo(2841, 8);
        break logic;
      case 2841:
        if (!!cmd_isset(193)) {
          jumpTo(526);
          break logicSwitch;
        }
        cmd_set(193);
        cmd_increment(3);
      case 526:
        cmd_set(94);
        jumpTo(8);
        break logicSwitch;
      case 525:
        cmd_print(m45);
        jumptoLineArray = [2842];
        jumpTo(2842, 8);
        break logic;
      case 2842:
      case 8:
        jumpTo(9);
        break logicSwitch;
      case 524:
        cmd_print(m46);
        jumptoLineArray = [2843];
        jumpTo(2843, 8);
        break logic;
      case 2843:
      case 523:
      case 9:
        if (cmd_isset(94)) {
          cmd_reset(94);
          cmd_assignn(77, 0);
          cmd_load_view(200);
          cmd_animate_obj(200);
          cmd_set_view(200, 200);
          cmd_set_loop(200, 1);
          cmd_position(200, 5, 67);
          cmd_ignore_objs(200);
          cmd_assignn(91, 2);
          cmd_cycle_time(200, 91);
          cmd_draw(200);
          cmd_end_of_loop(200, 121);
        }
        if (!cmd_isset(121)) {
          jumpTo(527);
          break logicSwitch;
        }
        if (!cmd_equaln(77, 0)) {
          jumpTo(528);
          break logicSwitch;
        }
        cmd_print(m47);
        jumptoLineArray = [2844];
        jumpTo(2844, 8);
        break logic;
      case 2844:
        cmd_load_view(226);
        cmd_set_view(226, 226);
        cmd_set_loop(226, 1);
        cmd_position(226, 63, 144);
        cmd_ignore_objs(226);
        cmd_normal_cycle(226);
        cmd_assignn(91, 4);
        cmd_cycle_time(226, 91);
        cmd_draw(226);
        cmd_drop(i7);
        cmd_increment(3);
        jumpTo(10);
        break logicSwitch;
      case 528:
        if (!cmd_equaln(77, 1)) {
          jumpTo(529);
          break logicSwitch;
        }
        cmd_print(m48);
        jumptoLineArray = [2845];
        jumpTo(2845, 8);
        break logic;
      case 2845:
        jumpTo(10);
        break logicSwitch;
      case 529:
        if (!cmd_equaln(77, 2)) {
          jumpTo(530);
          break logicSwitch;
        }
        cmd_print(m49);
        jumptoLineArray = [2846];
        jumpTo(2846, 8);
        break logic;
      case 2846:
      case 530:
      case 10:
        cmd_reset(121);
        cmd_set_loop(200, 0);
        cmd_set_cel(200, 0);
        cmd_assignn(91, 2);
        cmd_cycle_time(200, 91);
        cmd_end_of_loop(200, 122);
        cmd_increment(77);
      case 527:
      case 2847:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(122) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(122);
              cmd_set_loop(200, 1);
              cmd_random(0, 5, 80);
              cmd_set_cel_v(200, 80);
              cmd_assignn(91, 2);
              cmd_cycle_time(200, 91);
              cmd_end_of_loop(200, 121);
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_equaln(77, 3) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_reset(121);
                    cmd_erase(200);
                    cmd_accept_input();
                    cmd_set_cel(200, 0);
                    cmd_normal_cycle(200);
                  case 280000:
                    ifSkip = ifSkipArrayShift();
                    if (!cmd_isset(194) || ifSkip) {
                      switch (jumptoLineArrayShift()) {
                        default:
                          cmd_get(i10);
                          cmd_show_obj(229);
                          jumptoLineArray = [2847, 28000, 280000, 2800000];
                          ifSkipArray = [true, true, true];
                          jumpTo(2847, 8);
                          break logic;
                        case 2800000:
                          cmd_set(194);
                          cmd_increment(3);
                      }
                    }
                    cmd_print(m50);
                    jumptoLineArray = [2848];
                    jumpTo(2848, 8);
                    break logic;
                }
              }
          }
        }
      case 2848:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(50, 35) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_has(i16) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m51);
                    jumptoLineArray = [2848, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2848, 8);
                    break logic;
                  case 280000:
                    jumpTo(11);
                    break logicSwitch;
                }
              }
              if (cmd_isset(124)) {
                cmd_set(70);
                jumpTo(11);
                break logicSwitch;
              }
              cmd_print(m52);
              jumptoLineArray = [2849];
              jumpTo(2849, 8);
              break logic;
          }
        }
      case 2849:
      case 11:
      case 2850:
        ifSkip = ifSkipArrayShift();
        if (cmd_said(50, 35, 19) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_has(i16) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m53);
                    jumptoLineArray = [2850, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2850, 8);
                    break logic;
                  case 280000:
                    jumpTo(12);
                    break logicSwitch;
                }
              }
              if (cmd_isset(124)) {
                cmd_set(70);
                jumpTo(12);
                break logicSwitch;
              }
              cmd_print(m54);
              jumptoLineArray = [2851];
              jumpTo(2851, 8);
              break logic;
          }
        }
      case 2851:
      case 12:
      case 2852:
        ifSkip = ifSkipArrayShift();
        if (
          cmd_said(50, 35, 58) ||
          cmd_said(50, 35, 19, 58) ||
          cmd_said(101, 35, 19, 58) ||
          ifSkip
        ) {
          switch (jumptoLineArrayShift()) {
            default:
            case 28000:
              ifSkip = ifSkipArrayShift();
              if (cmd_has(i16) || ifSkip) {
                switch (jumptoLineArrayShift()) {
                  default:
                    cmd_print(m51);
                    jumptoLineArray = [2852, 28000, 280000];
                    ifSkipArray = [true, true];
                    jumpTo(2852, 8);
                    break logic;
                  case 280000:
                    jumpTo(13);
                    break logicSwitch;
                }
              }
              if (cmd_isset(124)) {
                cmd_set(75);
                jumpTo(13);
                break logicSwitch;
              }
              cmd_print(m55);
              jumptoLineArray = [2853];
              jumpTo(2853, 8);
              break logic;
          }
        }
      case 2853:
      case 13:
        if (cmd_isset(75)) {
          cmd_reset(75);
          if (cmd_center_posn(0, 40, 132, 80, 167)) {
            cmd_program_control();
            cmd_prevent_input();
            cmd_set(71);
            cmd_set(76);
            jumpTo(14);
            break logicSwitch;
          }
          cmd_print(m56);
          jumptoLineArray = [2854];
          jumpTo(2854, 8);
          break logic;
        }
      case 2854:
      case 14:
        if (cmd_isset(70)) {
          cmd_reset(70);
          if (cmd_center_posn(0, 40, 132, 80, 167)) {
            cmd_program_control();
            cmd_prevent_input();
            cmd_set(71);
            if (!cmd_isset(197)) {
              cmd_set(197);
              cmd_increment(3);
            }
            jumpTo(15);
            break logicSwitch;
          }
          cmd_print(m56);
          jumptoLineArray = [2855];
          jumpTo(2855, 8);
          break logic;
        }
      case 2855:
      case 15:
        if (cmd_isset(71)) {
          cmd_reset(71);
          cmd_get_posn(0, 82, 83);
          if (!cmd_greatern(82, 51) && !cmd_greatern(83, 155)) {
            cmd_move_obj(0, 48, 160, 1, 71);
            jumpTo(16);
            break logicSwitch;
          }
          if (!cmd_greatern(82, 48) && !cmd_greatern(83, 160)) {
            cmd_move_obj(0, 72, 160, 1, 71);
            jumpTo(16);
            break logicSwitch;
          }
          cmd_move_obj(0, 72, 156, 1, 72);
        }
      case 16:
        if (cmd_isset(72)) {
          cmd_reset(72);
          if (cmd_isset(76)) {
            cmd_reset(76);
            cmd_load_view(82);
            cmd_set_view(1, 82);
            cmd_set_loop(1, 0);
            cmd_set_cel(1, 0);
            cmd_get_posn(0, 30, 31);
            cmd_subn(30, 7);
            cmd_position_v(1, 30, 31);
            cmd_get_priority(0, 84);
            cmd_set_priority_v(1, 84);
            cmd_ignore_blocks(1);
            cmd_ignore_objs(1);
            cmd_erase(0);
            cmd_draw(1);
            cmd_end_of_loop(1, 77);
            if (!cmd_isset(198)) {
              cmd_set(198);
              cmd_increment(3);
            }
            jumpTo(17);
            break logicSwitch;
          }
          cmd_load_view(92);
          cmd_set_view(1, 92);
          cmd_set_loop(1, 0);
          cmd_set_cel(1, 0);
          cmd_get_posn(0, 30, 31);
          cmd_subn(30, 7);
          cmd_position_v(1, 30, 31);
          cmd_get_priority(0, 84);
          cmd_set_priority_v(1, 84);
          cmd_ignore_blocks(1);
          cmd_ignore_objs(1);
          cmd_erase(0);
          cmd_draw(1);
          cmd_assignn(91, 4);
          cmd_cycle_time(1, 91);
          cmd_end_of_loop(1, 73);
        }
      case 17:
        if (cmd_isset(77)) {
          cmd_reset(77);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 100);
          cmd_set_view(254, 93);
          cmd_set_loop(254, 2);
          cmd_set_cel(254, 0);
          cmd_end_of_loop(254, 78);
        }
        if (cmd_isset(78)) {
          cmd_reset(78);
          cmd_set_loop(1, 2);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 79);
        }
        if (cmd_isset(79)) {
          cmd_reset(79);
          cmd_erase(1);
          cmd_draw(0);
          cmd_accept_input();
          cmd_player_control();
          cmd_get(i16);
          cmd_show_obj(235);
          jumptoLineArray = [2856];
          jumpTo(2856, 8);
          break logic;
        }
      case 2856:
        if (cmd_isset(73)) {
          cmd_reset(73);
          cmd_set_loop(1, 1);
          cmd_set_cel(1, 0);
          cmd_end_of_loop(1, 74);
        }
        if (cmd_isset(74)) {
          cmd_reset(74);
          cmd_set_loop(1, 2);
          cmd_set_cel(1, 0);
          cmd_normal_cycle(1);
          cmd_get_posn(1, 82, 83);
          cmd_assignn(83, 0);
          cmd_assignn(92, 4);
          cmd_move_obj_v(1, 82, 83, 92, 100);
        }
      case 2857:
        ifSkip = ifSkipArrayShift();
        if ((cmd_isset(3) && !cmd_isset(96)) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_set(96);
              cmd_print(m57);
              jumptoLineArray = [2857, 28000];
              ifSkipArray = [true];
              jumpTo(2857, 8);
              break logic;
            case 28000:
              cmd_get_posn(0, 30, 31);
              if (cmd_greatern(30, 70)) {
                cmd_move_obj(0, 136, 140, 1, 97);
                jumpTo(18);
                break logicSwitch;
              }
              cmd_move_obj(0, 18, 144, 1, 97);
          }
        }
      case 18:
      case 2858:
        ifSkip = ifSkipArrayShift();
        if (cmd_isset(97) || ifSkip) {
          switch (jumptoLineArrayShift()) {
            default:
              cmd_reset(97);
              cmd_print(m58);
              jumptoLineArray = [2858, 28000];
              ifSkipArray = [true];
              jumpTo(2858, 8);
              break logic;
            case 28000:
              cmd_load_view(81);
              cmd_set_view(1, 81);
              cmd_set_loop(1, 0);
              cmd_set_cel(1, 0);
              cmd_get_posn(0, 30, 31);
              cmd_subn(30, 6);
              cmd_addn(31, 10);
              cmd_position_v(1, 30, 31);
              cmd_get_priority(0, 84);
              cmd_set_priority_v(1, 84);
              cmd_ignore_blocks(1);
              cmd_ignore_objs(1);
              cmd_erase(0);
              cmd_draw(1);
              cmd_end_of_loop(1, 98);
              if (!cmd_isset(196)) {
                cmd_set(196);
                cmd_increment(3);
              }
          }
        }
        if (cmd_isset(98)) {
          cmd_reset(98);
          cmd_reset(96);
          cmd_position(0, 72, 162);
          cmd_assignn(35, 1);
        }
        if (cmd_equaln(2, 3)) {
          cmd_new_room(13);
          if (AGI.break_all_logics) return;
        }
        if (cmd_equaln(4, 1) && cmd_equaln(5, 1)) {
          cmd_new_room(12);
          if (AGI.break_all_logics) return;
        }
        return;
    }
  }
};
MESSAGES[8] = [
  '',
  "It's the end of the road as you know it...",
  'And you feel fine.',
  "Maybe we can get this boulder out of the way in a sequel or two. Why don't we just pretend it's not there.",
  'Anywhooooo...',
  'There is a Air Elemental just floating about.',
  "There is a drunkard lounging on the ground. He doesn't look too well. ",
  'He is a little chemically inconvenienced at the moment.',
  'Is a boulder really just a rock?',
  'The boulder is there to stay. The only way around it is a sequel.',
  "It's there to stay. The only way around it is a sequel.",
  "A corn is acorn? No, it can't be.",
  'If only you could fly...',
  'This tree casts some nice shade underneath it. So inviting...',
  'They roll on past the boulder.',
  'It must lead somewhere.',
  "You're not close enough...",
  'There is a certain air about this Air Elemental.',
  "It's right under your nose!",
  "Surely, you have better things to do right now than drink this man's liquor.",
  "You're already corny enough.",
  'Hercules! Hercules!',
  'The drunk man starts rambling to you.',
  '"Beware!"',
  '"Shhomthin\'s wrong wit thish playshhh."',
  '"I wishhh I coul\' get out uv herrreer."',
  'Mumble, mumble, mumble, "Wait!"',
  '"Will youuu be myyy nuuu frien\'?"',
  '"You can leeeeaaaan on meee..."',
  '"I\'ll be therrrer for youuu..."',
  '"Caaauz dat\'s what frien\'s are forrr..."',
  '"Shhooo, will youuu be myyy nuuu frien\'?"',
  "The drunk man begins talk to himself in mumbles. You can't understand a word he says.",
  "He's such a sad man.",
  'He used to be such a sad man, but now that balloon makes him happy. Way to go you!',
  '"Thank you shhooo much!',
  '"You arrre the win\' beneathhh my wingshhh."',
  '"Let me telll you a shecret."',
  '"If you die in a dream, you don\' die in real life. You shhhimply wake up... hhic!"',
  "Once again, the drunk man begins to mumble. You can't understand a word he says.",
  '"Yes," you say to the poor man.',
  'You have no heart. "No," you say to the poor man.',
  'Do you feel good about yourself?',
  'The man continues his drunken ramble with himself.',
  'You offer the balloon to the man who is not up on his luck...',
  'If you try to throw him the balloon from here, it will float away. Get closer.',
  "It's not your party anymore. It's his.",
  '"For me?"',
  '"I gotta returrr the favurrr."',
  "\"Herrre you go. Thesssh glasssez don't wurrrk for my tire eyes. Maybe you ca' use 'em.\"",
  "He's not such a sad man anymore. And now you have a new friend. Not such a bad day after all.",
  "You're already full of hot air. More of it will not improve you as a person.",
  'You already get it involuntarily...',
  "You already have it. And it makes you feel like you're on cloud 9!",
  'Are you sure you see what you think you see?',
  'You see no elemental.',
  'Although air is all around you, for this you must get closer.',
  "Let's try to walk around the boulder...",
  'Oh no! Quickgrass!',
];
CONTROLS[8] =
  '?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4?4/.!Q/.ZQU/.PAx/.K5^/.9A+/,A,/{5.9/^A.E/!5.P/x5.U/r5.Z/r5.Z/l5.g/g5.l/Z5.r/U5.x/P5.!/P5.!/K5.^/E5.+/95.{/45.,><.,5<4><.,5<4><.{5<9><.^A<E><.rF<P><.ZF<g><.PA<x><.P5<!.EA>.U7x5<!45,AEA>.PCl5<!95!FZ5>.U7g5<!9AgFxA.47>K7U57<!E5UA,5{7>UCK5H<rEAEA.EA!7>l7E5N<lE59A.ZAl7>x795X<ZK5.x5UC>^p<UK5.!AE7>+A9p<KK5.!C57>^APp<EK5.xN95>rAgu<4P5.gSKA>UA!p.,P5.ZSZA>9A{u.+P5.USrA<.+A.Ep.^P5.PS^5<.Et.Uu.xUA.9S{A.{.B<4u.rgA+X.9Ax.B<.Pu.gr5!S.U5n96l6<.^u.Zr5xS<96l6<.{p.Ux5lS<E6l6<.,u.Kx5gS<K6l6>9p.Ex5UX<P6l6>Eu.4!5KX<U6l6>Ku,!5EX<Z6l6>Uu+!59X<gt>Zu^^5N><.!ux^5H><.+ur^5C><.,`g^57/EuZ+5/K`P+5/UuK+5/Z`9{5/Z`{5/lp{5/xc,5/+H,5/.4';

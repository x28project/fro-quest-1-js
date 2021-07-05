window.logic87 = function()
{
  while(1) {
    switch (jumptoLine)
  {
    case 0:
if ((!cmd_lessn(119,0) && !cmd_greatern(119,254) && !cmd_lessn(120,0))) {
  if ((cmd_equaln(119,0))) {
    cmd_load_view(19);
    cmd_assignn(85, 19);
    cmd_assignn(86, 3);
    cmd_assignn(87, 0);
    cmd_assignn(82, 0);
    cmd_assignn(83, 0);
    cmd_assignn(84, 15);
    cmd_assignn(89, 4);
  }
  cmd_assignv(82, 123);
  if ((cmd_lessn(119,254))) {
    cmd_assignv(83, 119);
    cmd_assignv(124, 83);
  }
  else {
    cmd_assignv(83, 120);
    cmd_assignv(124, 83);
    cmd_addn(124, 254);
  }
  if ((cmd_lessn(119,254) && !cmd_greatern(121,87))) {
    cmd_subv(124, 121);
  }
  if ((cmd_lessn(119,254) && !cmd_lessn(121,88))) {
    cmd_assignv(122, 121);
    cmd_subn(122, 88);
    cmd_subn(124, 88);
    cmd_subv(124, 122);
  }
  if ((cmd_equaln(119,254) && !cmd_lessn(121,86))) {
    cmd_subv(124, 121);
  }
  cmd_assignn(87, 1);
  if ((cmd_equaln(124,0))) {
    cmd_assignn(87, 0);
  }
  if ((cmd_equaln(124,168))) {
    cmd_assignn(87, 2);
  }
  if ((cmd_lessn(119,254) && !cmd_greatern(121,87) && !cmd_lessn(83,0))) {
    if ((!cmd_greatern(124,168))) {
      if ((cmd_equaln(124,168))) {
        cmd_decrement(124);
      }
      cmd_add_to_pic_v(85, 86, 87, 82, 124, 84, 89, true, true);
    }
  }
  if ((cmd_lessn(119,254) && !cmd_lessn(121,88) && !cmd_lessn(83,88) && cmd_lessn(83,255))) {
    if ((!cmd_greatern(124,168))) {
      if ((cmd_equaln(124,168))) {
        cmd_decrement(124);
      }
      cmd_add_to_pic_v(85, 86, 87, 82, 124, 84, 89, true, true);
    }
  }
  if ((cmd_equaln(119,254) && !cmd_lessn(121,86) && cmd_lessn(83,74))) {
    if ((!cmd_greatern(124,168))) {
      if ((cmd_equaln(124,168))) {
        cmd_decrement(124);
      }
      cmd_add_to_pic_v(85, 86, 87, 82, 124, 84, 89, true, true);
    }
  }
}
return;

}}}
